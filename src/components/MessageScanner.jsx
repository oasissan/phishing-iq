import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { scanTextContent } from '../services/phishingApi';

export default function MessageScanner() {
  const [files, setFiles] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [viewingContext, setViewingContext] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt', '.eml'],
      'message/rfc822': ['.eml']
    },
    maxSize: 5242880 // 5MB
  });

  const handleRemoveFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (files.length === 0 && !textInput.trim()) {
      setError('Please upload a file or enter text content to scan');
      return;
    }
    
    setLoading(true);
    setError('');
    setResults(null);
    
    try {
      let allResults = [];
      
      // Process text input if provided
      if (textInput.trim()) {
        const textResults = await scanTextContent(textInput);
        allResults = [...allResults, ...textResults.map(r => ({
          ...r,
          source: 'Text Input'
        }))];
      }
      
      // Process uploaded files
      for (const file of files) {
        const text = await readFileAsText(file);
        const fileResults = await scanTextContent(text);
        allResults = [...allResults, ...fileResults.map(r => ({
          ...r,
          source: file.name
        }))];
      }
      
      // Count safe URLs
      const safeCount = allResults.filter(item => item.result.status === 'safe').length;
      
      setResults({
        items: allResults,
        summary: {
          total: allResults.length,
          safe: safeCount,
          unsafe: allResults.length - safeCount
        }
      });
    } catch (err) {
      setError('Error scanning content. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleShowContext = (item) => {
    setViewingContext(item);
  };

  const handleCloseContext = () => {
    setViewingContext(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload .eml or .txt files
          </label>
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed p-6 rounded-lg text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-indigo-400 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300'
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              {isDragActive ? (
                <p className="text-indigo-600">Drop the files here...</p>
              ) : (
                <div>
                  <p className="text-gray-700 mb-1">Drag & drop files here, or click to select files</p>
                  <p className="text-xs text-gray-500">Accepts .eml and .txt files up to 5MB</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {files.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Files to scan ({files.length})</h3>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded">
                  <span className="text-sm truncate">{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="textContent" className="block text-sm font-medium text-gray-700 mb-1">
            Or paste text message/email content
          </label>
          <textarea
            id="textContent"
            rows="5"
            placeholder="Paste email or message content here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          ></textarea>
        </div>
        
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-colors duration-300 disabled:bg-indigo-400 font-medium"
        >
          {loading ? 'Scanning...' : 'Scan for Malicious URLs'}
        </button>
      </form>
      
      {results && (
        <div className="mt-6">
          <div className={`p-4 rounded-lg mb-4 ${
            results.summary.unsafe > 0 ? 'bg-red-50' : 'bg-green-50'
          }`}>
            <h3 className="font-semibold mb-2">Scan Summary</h3>
            <p>
              {results.summary.safe} out of {results.summary.total} links are safe.
              {results.summary.unsafe > 0 && (
                <span className="text-red-600 font-medium"> {results.summary.unsafe} potentially malicious URLs found!</span>
              )}
            </p>
          </div>
          
          {results.items.length > 0 ? (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Results</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.items.map((item, index) => (
                      <tr key={index} className={item.result.status !== 'safe' ? 'bg-red-50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-900 truncate max-w-[180px]">{item.url}</td>
                        <td className="px-4 py-3 text-sm">
                          {item.result.status === 'safe' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Safe
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Phishing
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {item.source}
                          {item.lineNumber && ` (line ${item.lineNumber})`}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => handleShowContext(item)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            View Context
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-gray-700">No URLs were found in the provided content.</p>
          )}
        </div>
      )}
      
      {/* Context Viewer Modal */}
      {viewingContext && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">URL Context</h3>
              <button 
                onClick={handleCloseContext}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <div className={`p-3 rounded ${
                viewingContext.result.status === 'safe' ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <p className="font-medium">
                  URL: {viewingContext.url}
                </p>
                <p className="text-sm mt-1">
                  Status: {viewingContext.result.status === 'safe' ? 'Safe' : 'Phishing'}
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Source: {viewingContext.source}</h4>
              {viewingContext.lineNumber && (
                <p className="text-sm text-gray-600 mb-2">Found on line {viewingContext.lineNumber}</p>
              )}
            </div>
            
            {viewingContext.result.status !== 'safe' && (
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-red-800 mb-2">Warning</h4>
                <p className="text-sm text-gray-800 mb-2">
                  This URL has been identified as potentially malicious by {viewingContext.result.source}.
                </p>
                <h5 className="font-medium text-gray-800 mb-1">Recommended Actions:</h5>
                <ul className="text-sm text-gray-800 list-disc list-inside">
                  <li>Do not click on this link</li>
                  <li>Report the email/message as phishing</li>
                  <li>If you've entered any credentials, change your passwords immediately</li>
                </ul>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={handleCloseContext}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
