import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Scoring } from './components/Counter';
// Global variable to track if the script is already injected
let isInjected = false;
let root = null;
let lastProcessedScore = null;
// Function to handle gauge click
const handleGaugeClick = () => {
    try {
        // Check if we can communicate with the background script
        if (!chrome.runtime.id) {
            console.error('Extension context invalid');
            return;
        }
        // Send message to background script to handle opening the side panel
        chrome.runtime.sendMessage({
            action: 'OPEN_FRONTEND_PANEL'
        }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Error:', chrome.runtime.lastError);
                return;
            }
            if (response?.success) {
                console.log('Side panel opened successfully');
            }
            else {
                console.error('Failed to open side panel:', response?.error);
            }
        });
    }
    catch (error) {
        console.error('Error handling gauge click:', error);
    }
};
// Function to create a custom event for score updates
const createScoreUpdateEvent = (score) => {
    return new CustomEvent('trustee-score-update', {
        detail: { score }
    });
};
// Create the update function in the window context
function createUpdateFunction() {
    window._updateTrusteeScore = (score) => {
        try {
            window.postMessage({
                type: 'UPDATE_SCORE',
                score: score
            }, '*');
            console.log('Score update sent:', score);
            return true;
        }
        catch (error) {
            console.error('Error updating score:', error);
            return false;
        }
    };
    // Create a proxy to the function for external access
    window.updateTrusteeScore = window._updateTrusteeScore;
}
// Inject the scoring component if not already injected
function injectScoringComponent() {
    if (isInjected) {
        console.log('Component already injected, not injecting again');
        return;
    }
    try {
        // Remove existing counter if present
        const existingCounter = document.getElementById('trustee-counter-root');
        if (existingCounter) {
            existingCounter.remove();
        }
        // Create container for React component
        const container = document.createElement('div');
        container.id = 'trustee-counter-root';
        container.style.cursor = 'pointer';
        container.addEventListener('click', handleGaugeClick);
        document.body.appendChild(container);
        // Render React component
        root = createRoot(container);
        root.render(React.createElement(Scoring));
        isInjected = true;
        console.log('Trustee scoring component has been injected');
        // Create the update function
        createUpdateFunction();
    }
    catch (error) {
        console.error('Error injecting scoring component:', error);
    }
}
// Listen for direct messages from the webpage with error handling
window.addEventListener('message', (event) => {
    try {
        if (event.source === window) {
            if (event.data && event.data.type === 'UPDATE_SCORE') {
                const newScore = event.data.score;
                if (lastProcessedScore !== newScore) {
                    lastProcessedScore = newScore;
                    window.postMessage(event.data, '*');
                    document.dispatchEvent(createScoreUpdateEvent(newScore));
                }
            }
        }
    }
    catch (error) {
        console.error('Error processing message:', error);
    }
});
// Function to get the page source
function getPageSource() {
    const html = document.documentElement.outerHTML;
    const url = window.location.href;
    return { html, url };
}
// Listen for messages from the popup with error handling
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try {
        if (message.action === 'INJECT_COUNTER') {
            injectScoringComponent();
            sendResponse({ success: true });
        }
        if (message.action === 'UPDATE_SCORE') {
            console.log('Received UPDATE_SCORE from popup with score:', message.score);
            window.postMessage({
                type: 'UPDATE_SCORE',
                score: message.score
            }, '*');
            document.dispatchEvent(createScoreUpdateEvent(message.score));
            if (window._updateTrusteeScore) {
                window._updateTrusteeScore(message.score);
            }
            sendResponse({ success: true });
        }
        if (message.action === 'GET_PAGE_SOURCE') {
            const sourceData = getPageSource();
            sendResponse({ success: true, data: sourceData });
        }
    }
    catch (error) {
        console.error('Error handling message:', error);
        sendResponse({ success: false, error: error instanceof Error ? error.message : 'Unknown error' });
    }
    // Return true to indicate we'll send a response asynchronously
    return true;
});
// Function to create and inject the send button
function injectSendButton() {
    const button = document.createElement('button');
    button.id = 'trustee-send-source-btn';
    button.textContent = 'Send Page to API';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '10000';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.addEventListener('click', async () => {
        try {
            // Check if extension context is valid
            if (!chrome.runtime?.id) {
                throw new Error('Extension context is invalid');
            }
            button.textContent = 'Sending...';
            button.style.backgroundColor = '#FFA500';
            // Get page source first
            const sourceData = getPageSource();
            // Send message with retry logic
            const sendMessage = async (retries = 3) => {
                try {
                    return await new Promise((resolve, reject) => {
                        chrome.runtime.sendMessage({
                            action: 'GET_AND_SEND_PAGE_SOURCE',
                            data: sourceData
                        }, (response) => {
                            if (chrome.runtime.lastError) {
                                reject(chrome.runtime.lastError);
                                return;
                            }
                            resolve(response);
                        });
                    });
                }
                catch (error) {
                    if (retries > 0) {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        return sendMessage(retries - 1);
                    }
                    throw error;
                }
            };
            const response = await sendMessage();
            if (response.success) {
                button.textContent = 'Sent Successfully!';
                button.style.backgroundColor = '#45a049';
            }
            else {
                throw new Error(response.error || 'Failed to send page source');
            }
        }
        catch (error) {
            console.error('Error sending page source:', error);
            button.textContent = 'Error! Try Again';
            button.style.backgroundColor = '#f44336';
        }
        finally {
            // Reset button state after 2 seconds
            setTimeout(() => {
                button.textContent = 'Send Page to API';
                button.style.backgroundColor = '#4CAF50';
            }, 2000);
        }
    });
    document.body.appendChild(button);
}
// Initialize when the content script loads
document.addEventListener('DOMContentLoaded', () => {
    createUpdateFunction();
    injectScoringComponent();
    injectSendButton();
    // Automatically send page source when page loads
    chrome.runtime.sendMessage({ action: 'GET_AND_SEND_PAGE_SOURCE' }, (response) => {
        console.log('Initial page source send result:', response);
    });
});
// Re-initialize on page load
window.addEventListener('load', () => {
    createUpdateFunction();
    injectScoringComponent();
    injectSendButton();
});
