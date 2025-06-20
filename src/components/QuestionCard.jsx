import { useState, useEffect } from "react";

export default function QuestionCard({ scenario, onAnswer }) {
    const [selected, setSelected] = useState(null);
    const [animate, setAnimate] = useState(false); useEffect(() => {
        // Skip if scenario is not yet loaded
        if (!scenario) return;

        // Reset animation when scenario changes
        setAnimate(false);
        setSelected(null);
        // Trigger entry animation
        setTimeout(() => setAnimate(true), 50);
    }, [scenario]);

    const handleClick = (opt) => {
        setSelected(opt);
        setTimeout(() => onAnswer(opt.isCorrect), 1000); // longer pause for better UX
    };    // Get an icon based on the category
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'email':
                return '✉️';
            case 'social':
                return '💬';
            case 'sms':
                return '📱';
            case 'popup':
                return '🖥️';
            default:
                return '🔔';
        }
    };

    // Safety check - if scenario is not available, show a loading state
    if (!scenario) {
        return (
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="text-xl">{getCategoryIcon(scenario.category)}</span>
                </div>
                <span className="text-sm uppercase tracking-wider text-indigo-600 font-medium">
                    {scenario.category} alert
                </span>
            </div>

            <p className="text-lg font-medium mb-6 text-gray-800">{scenario.prompt}</p>

            <div className="space-y-4">
                {scenario.options.map((opt, idx) => {
                    const isChosen = selected === opt;
                    const base =
                        "w-full text-left px-4 py-3 rounded-xl border transition duration-300 flex justify-between items-center";
                    const style =
                        !selected
                            ? "hover:bg-indigo-50 hover:border-indigo-300 border-gray-200"
                            : opt.isCorrect
                                ? "bg-green-100 border-green-400 shadow-sm"
                                : isChosen
                                    ? "bg-red-100 border-red-400 shadow-sm"
                                    : "opacity-60 border-gray-200";

                    return (
                        <button
                            key={idx}
                            disabled={!!selected}
                            className={`${base} ${style} ${opt.isCorrect && selected ? 'animate-pulse' : ''}`}
                            onClick={() => handleClick(opt)}
                        >
                            <span>{opt.text}</span>
                            {selected && (
                                <span className={`ml-2 ${opt.isCorrect ? 'text-green-600' : isChosen ? 'text-red-600' : ''}`}>
                                    {opt.isCorrect ?
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        : isChosen ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            : null}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {selected && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 transform transition-all duration-500 animate-fade-in">
                    <p className="text-sm text-gray-700">
                        <span className={`font-medium ${selected.isCorrect ? "text-green-600" : "text-red-600"}`}>
                            {selected.isCorrect ? "Correct! " : "Incorrect. "}
                        </span>
                        {selected.explanation}
                    </p>
                </div>
            )}
        </div>
    );
}

