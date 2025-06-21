import { useState, useEffect } from "react";
import { scenarios } from "./data/scenarios";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import ProgressBar from "./components/ProgressBar";
import Confetti from "./components/Confetti";
import Header from "./components/Header";
import PhishingScanner from "./components/PhishingScanner";

export default function App() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [shuffledScenarios, setShuffledScenarios] = useState([]);
    const [showScanner, setShowScanner] = useState(false);
    const total = 10; // Limit quiz to 10 questions

    // Shuffle the scenarios when the game starts
    useEffect(() => {
        // Ensure we have scenarios loaded when the game starts
        if (gameStarted && shuffledScenarios.length === 0) {
            // Shuffle all scenarios and take only the first 10
            const shuffled = [...scenarios].sort(() => Math.random() - 0.5).slice(0, 10);
            setShuffledScenarios(shuffled);
        }
    }, [gameStarted, shuffledScenarios.length]);

    const handleAnswer = (correct) => {
        if (correct) {
            setScore((s) => s + 1);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 2000);
        }
        setTimeout(() => setCurrent((i) => i + 1), 1000);
    };

    const storedBest = Number(localStorage.getItem("bestScore") || 0);

    const restart = () => {
        if (score > storedBest) localStorage.setItem("bestScore", score);
        setCurrent(0);
        setScore(0);
        setGameStarted(false);
        setShuffledScenarios([]);
    };

    const startGame = () => {
        // Shuffle all scenarios and take only the first 10
        const shuffled = [...scenarios].sort(() => Math.random() - 0.5).slice(0, 10);
        setShuffledScenarios(shuffled);
        setGameStarted(true);
        setShowScanner(false);
    };
    
    const openScanner = () => {
        setGameStarted(false);
        setShowScanner(true);
    };
    
    const backToHome = () => {
        setShowScanner(false);
        setGameStarted(false);
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 p-4 font-['Inter',sans-serif]">
            <Confetti active={showConfetti} />

            <Header />

            {!gameStarted && !showScanner ? (
                <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 mb-6 transform transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Welcome to Phishing IQ</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <p className="mb-4 text-gray-700">
                        Phishing attacks are responsible for over 80% of reported security incidents in educational institutions.
                        Test your knowledge and learn to protect yourself from these common threats.
                    </p>
                    <p className="mb-6 text-gray-700">
                        You'll be presented with {total} different scenarios. For each one, decide whether it's a legitimate message
                        or a phishing attempt.
                    </p>
                    <div className="space-y-3">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl w-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center"
                            onClick={startGame}
                        >
                            <span className="mr-2">Start Quiz</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        
                        <button
                            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl w-full transition-all duration-300 font-medium flex items-center justify-center"
                            onClick={openScanner}
                        >
                            <span className="mr-2">URL & Email Scanner</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : showScanner ? (
                <div className="w-full max-w-3xl">
                    <div className="mb-6">
                        <button
                            onClick={backToHome}
                            className="flex items-center text-indigo-600 hover:text-indigo-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Home
                        </button>
                    </div>
                    <PhishingScanner />
                </div>
            ) : current < total && shuffledScenarios.length > 0 ? (
                <div className="w-full max-w-xl">
                    <div className="flex justify-between items-center mb-2 text-gray-700 font-medium">
                        <div>
                            Question {current + 1} / {total}
                        </div>
                        <div className="text-indigo-600">
                            Score: {score}
                        </div>
                    </div>
                    <ProgressBar current={current + 1} total={total} />
                    {shuffledScenarios[current] && (
                        <QuestionCard scenario={shuffledScenarios[current]} onAnswer={handleAnswer} />
                    )}
                </div>
            ) : (
                <Result score={score} total={total} onRestart={restart} onScannerOpen={openScanner} />
            )}

            <div className="text-sm text-gray-600 mt-4">
                Personal best: {storedBest} / {total}
            </div>

            <div className="mt-8 text-xs text-gray-500 max-w-md text-center">
                <p>Based on research from KnowBe4, Check Point Software, and Hoxhunt Phishing Trends reports.</p>
            </div>
        </div>
    );
}
