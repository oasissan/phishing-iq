import axios from 'axios';

// Using PhishTank API for URL scanning
// Note: In a production environment, you would need to register for an API key
const PHISHTANK_API_URL = 'https://checkurl.phishtank.com/checkurl/';

// Using Google Safe Browsing API as a backup
// Note: In a production environment, you would need to register for a Google API key
const GOOGLE_SAFEBROWSING_API_URL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';

export const checkUrl = async (url) => {
  try {
    // This is a simplified version - in production, you would:
    // 1. Send requests to your backend server that has proper API keys stored securely
    // 2. Your backend would then call these services and return the results
    
    // Simulated response for demo purposes
    // In a real implementation, you would call the actual APIs
    const mockResult = {
      status: Math.random() > 0.8 ? 'phishing' : 'safe', // 20% chance of being phishing for demo
      lastVerified: new Date().toISOString(),
      source: Math.random() > 0.5 ? 'PhishTank' : 'Google Safe Browsing',
      details: {
        url: url,
        urlEncoded: encodeURIComponent(url),
        timestamp: Date.now()
      }
    };
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return mockResult;
  } catch (error) {
    console.error('Error checking URL:', error);
    throw error;
  }
};

export const extractUrlsFromText = (text) => {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Find all matches
  const matches = text.match(urlRegex) || [];
  
  // Remove duplicates
  return [...new Set(matches)];
};

export const scanTextContent = async (text) => {
  // Extract URLs from text
  const urls = extractUrlsFromText(text);
  
  // Check each URL
  const results = await Promise.all(
    urls.map(async (url) => {
      const checkResult = await checkUrl(url);
      return {
        url,
        result: checkResult,
        lineNumber: findLineNumber(text, url)
      };
    })
  );
  
  return results;
};

// Helper function to find line number where URL appears
const findLineNumber = (text, url) => {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(url)) {
      return i + 1;
    }
  }
  return null;
};
