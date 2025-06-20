import { useEffect, useState } from "react";

export default function Result({ score, total, onRestart }) {
    const [animate, setAnimate] = useState(false);
    const pct = Math.round((score / total) * 100);
    const grade = pct >= 90 ? "A" : pct >= 75 ? "B" : pct >= 50 ? "C" : "D";

    useEffect(() => {
        // Trigger entry animation
        setTimeout(() => setAnimate(true), 50);
    }, []);

    // Feedback messages based on score
    const getFeedback = () => {
        if (pct >= 90) return {
            title: "Excellent!",
            message: "You have a strong ability to detect phishing attempts. You're well-prepared to protect yourself and others from these threats.",
            tips: "Keep informed about the latest phishing tactics by following cybersecurity blogs and newsletters.",
            icon: "🏆"
        };
        if (pct >= 75) return {
            title: "Good Job!",
            message: "You can identify most phishing attempts, but there's still room for improvement.",
            tips: "Pay extra attention to URLs, sender addresses, and urgent language in messages.",
            icon: "👍"
        };
        if (pct >= 50) return {
            title: "Not Bad",
            message: "You caught some phishing attempts, but missed others. More practice would be beneficial.",
            tips: "Remember: legitimate organizations never ask for sensitive information via email or messages.",
            icon: "🤔"
        };
        return {
            title: "Needs Improvement",
            message: "You're vulnerable to phishing attacks. Don't worry - awareness is the first step to improvement.",
            tips: "Before responding to any message: Stop, Think, and Verify through official channels.",
            icon: "📚"
        };
    };

    const feedback = getFeedback();

    return (
        <div className={`max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-10 transition-all duration-500 transform ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">
                    {feedback.icon}
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-indigo-800">Quiz Complete!</h2>

            <div className="mb-6">
                <div className="relative mb-4 h-24 w-24 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={grade === 'A' ? '#48bb78' : grade === 'B' ? '#4299e1' : grade === 'C' ? '#ecc94b' : '#f56565'}
                            strokeWidth="3"
                            strokeDasharray={`${pct}, 100`}
                            className="transition-all duration-1000 ease-in-out"
                        />
                        <text x="18" y="21" textAnchor="middle" fontSize="10" fill="#4a5568" fontWeight="bold">
                            {pct}%
                        </text>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
                        <span className={`${grade === 'A' ? 'text-green-600' : grade === 'B' ? 'text-blue-600' : grade === 'C' ? 'text-yellow-600' : 'text-red-600'}`}>
                            {grade}
                        </span>
                    </div>
                </div>
                <p className="text-xl mb-2">
                    Score: <span className="font-semibold">{score}</span> / {total}
                </p>
            </div>

            <div className="mb-6 text-left p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-indigo-800">{feedback.title}</h3>
                <p className="mb-3 text-sm text-gray-700">{feedback.message}</p>
                <p className="text-sm text-indigo-700 font-medium">Tip: {feedback.tips}</p>
            </div>

            <div className="mb-6 text-left">
                <h3 className="font-semibold mb-2 text-gray-700">Remember these key signs of phishing:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    {[
                        "Urgency or threats to create pressure",
                        "Suspicious sender domains and URLs",
                        "Requests for personal or financial information",
                        "Grammar and spelling errors",
                        "Unexpected attachments or requests"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl w-full transition-all duration-300 transform hover:scale-105 font-medium"
                onClick={onRestart}
            >
                Play Again
            </button>
        </div>
    );
}
