import { useState } from 'react';
import { checkUrl } from '../services/phishingApi';

export default function UrlScanner() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple URL validation
    if (!url || !url.match(/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i)) {
      setError('Please enter a valid URL');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      const result = await checkUrl(fullUrl);
      setResult(result);
    } catch (err) {
      setError('Error checking URL. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a website URL to check
          </label>
          <div className="flex">
            <input
              type="text"
              id="url"
              placeholder="example.com or https://example.com"
              className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 disabled:bg-indigo-400"
            >
              {loading ? 'Checking...' : 'Check'}
            </button>
          </div>
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
      </form>
      
      {result && (
        <div className={`p-4 rounded-lg ${result.status === 'safe' ? 'bg-green-50' : 'bg-red-50'} mb-4`}>
          <div className="flex items-center mb-2">
            {result.status === 'safe' ? (
              <>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-green-800">Safe</span>
              </>
            ) : (
              <>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-red-800">Phishing</span>
              </>
            )}
          </div>
          
          <div className="text-sm">
            <p className="mb-1">
              <span className="font-medium">URL:</span> {url}
            </p>
            <p className="mb-1">
              <span className="font-medium">Last verified:</span> {new Date(result.lastVerified).toLocaleString()}
            </p>
            <p className="mb-1">
              <span className="font-medium">Reported by:</span> {result.source}
            </p>
          </div>
          
          {result.status !== 'safe' && (
            <div className="mt-3 p-3 bg-white rounded border border-red-200">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Safe next steps:</h4>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Do not click on any links from this website</li>
                <li>If you received this URL in an email, report it as phishing</li>
                <li>If you've entered any credentials, change your passwords immediately</li>
                <li>Consider reporting this URL to {result.source}</li>
              </ul>
            </div>
          )}
        </div>
      )}
      
      <div className="text-sm text-gray-600">
        <p>This tool checks URLs against known phishing databases to help protect you from malicious websites.</p>
      </div>
    </div>
  );
}
