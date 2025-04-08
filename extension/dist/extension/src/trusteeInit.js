// Initialize the Trustee functionality
export function initializeTrustee() {
    if (!window.__TRUSTEE_INITIALIZED) {
        window.updateTrusteeScore = function (score) {
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
