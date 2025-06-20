import { useState, useEffect } from "react";
import { scenarios } from "./data/scenarios";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import ProgressBar from "./components/ProgressBar";
import Confetti from "./components/Confetti";
import Header from "./components/Header";

export default function App() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [shuffledScenarios, setShuffledScenarios] = useState([]);
    const total = scenarios.length;

    // Shuffle the scenarios when the game starts
    useEffect(() => {
        // Ensure we have scenarios loaded when the game starts
        if (gameStarted && shuffledScenarios.length === 0) {
            setShuffledScenarios([...scenarios].sort(() => Math.random() - 0.5));
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
        setShuffledScenarios([...scenarios].sort(() => Math.random() - 0.5));
        setGameStarted(true);
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 p-4 font-['Inter',sans-serif]">
            <Confetti active={showConfetti} />

            <Header />

            {!gameStarted ? (
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
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl w-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center"
                        onClick={startGame}
                    >
                        <span className="mr-2">Start Quiz</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
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
                <Result score={score} total={total} onRestart={restart} />
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
