export default function Header() {
    return (
        <div className="flex flex-col items-center mb-8">
            <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-indigo-700">Phishing IQ</h1>
            </div>
            <p className="text-sm text-gray-600 mt-2">Can you spot the phishing attempts?</p>
        </div>
    );
}
