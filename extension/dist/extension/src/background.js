"use strict";
// Initialize the extension
console.log('Background script initializing...');
// API endpoint configuration
const API_ENDPOINT = 'http://127.0.0.1:8000/api/page-source'; // Update this with your actual Python API endpoint
// Function to send page source to API
async function sendToAPI(data) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error sending to API:', error);
        throw error;
    }
}
// Function to get page source from active tab
async function getActiveTabSource() {
    try {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!activeTab.id) {
            throw new Error('No active tab found');
        }
        const response = await chrome.tabs.sendMessage(activeTab.id, { action: 'GET_PAGE_SOURCE' });
        if (!response.success) {
            throw new Error(response.error || 'Failed to get page source');
        }
        return response.data;
    }
    catch (error) {
        console.error('Error getting page source:', error);
        throw error;
    }
}
// Enable side panel functionality
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error('Error setting panel behavior:', error));
// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Background received message:', message);
    if (message.action === 'GET_AND_SEND_PAGE_SOURCE') {
        getActiveTabSource()
            .then(sourceData => sendToAPI(sourceData))
            .then(apiResponse => {
            sendResponse({ success: true, data: apiResponse });
        })
            .catch(error => {
            sendResponse({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        });
        return true; // Will send response asynchronously
    }
    if (message.action === 'OPEN_FRONTEND_PANEL') {
        // Ensure we return true immediately to indicate we'll send an async response
        try {
            // Enable the side panel first
            chrome.sidePanel.setOptions({
                enabled: true,
                path: 'sidepanel.html'
            })
                .then(() => {
                // Get the current window
                return chrome.windows.getCurrent();
            })
                .then((window) => {
                if (!window.id) {
                    throw new Error('No valid window ID found');
                }
                // Then try to open it with the current window
                return chrome.sidePanel.open({
                    windowId: window.id,
                    tabId: sender.tab?.id
                });
            })
                .then(() => {
                console.log('Side panel opened successfully');
                sendResponse({ success: true });
            })
                .catch((error) => {
                console.error('Error in opening sidepanel:', error);
                sendResponse({
                    success: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            });
            return true; // Indicates we will send a response asynchronously
        }
        catch (error) {
            console.error('Error in message handler:', error);
            sendResponse({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    return false; // For all other messages, we won't send a response
});
// Handle installation and updates
chrome.runtime.onInstalled.addListener(async (details) => {
    console.log('Extension installed/updated:', details.reason);
    try {
        // Set the default sidepanel behavior
        await chrome.sidePanel.setOptions({
            enabled: true,
            path: 'sidepanel.html'
        });
        console.log('Side panel options set successfully');
    }
    catch (error) {
        console.error('Error during initialization:', error);
    }
});
// Handle when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tabId, tab.url);
    }
});
// Handle when extension starts up
chrome.runtime.onStartup.addListener(() => {
    console.log('Extension starting up...');
});
// Log that background script is ready
console.log('Background script ready!');
