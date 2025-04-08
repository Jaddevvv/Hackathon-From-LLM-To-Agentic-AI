// Initialize the Trustee functionality
export function initializeTrustee() {
  if (!window.__TRUSTEE_INITIALIZED) {
    window.updateTrusteeScore = function(score: number) {
      console.log('Updating score to: ' + score);
      window.postMessage({ 
        type: 'UPDATE_SCORE', 
        score: score 
      }, '*');
      return true;
    };
    window.__TRUSTEE_INITIALIZED = true;
    console.log('Trustee function is now available globally via window.updateTrusteeScore()');
  }
}

// Add TypeScript declaration for the global property
declare global {
  interface Window {
    updateTrusteeScore?: (score: number) => void;
    __TRUSTEE_INITIALIZED?: boolean;
  }
} 