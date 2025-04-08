/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/sidepanel.ts ***!
  \**************************/

// Handle any initialization needed for the sidepanel
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('frontendFrame');
    const loadingMessage = document.getElementById('loadingMessage');
    if (loadingMessage) {
        loadingMessage.style.display = 'block';
    }
    // Handle iframe load events
    iframe.addEventListener('load', () => {
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }
        console.log('Frontend loaded in sidepanel');
    });
    // Handle iframe errors
    iframe.addEventListener('error', (error) => {
        console.error('Error loading frontend:', error);
        if (loadingMessage) {
            loadingMessage.textContent = 'Error loading Trustee. Please make sure your frontend is running on localhost:5173';
            loadingMessage.style.display = 'block';
        }
    });
    // Listen for messages from the frontend
    window.addEventListener('message', (event) => {
        // Make sure the message is from your frontend
        if (event.origin === 'http://localhost:5173') {
            console.log('Received message from frontend:', event.data);
            // Handle any messages from your frontend here
        }
    });
});

/******/ })()
;
//# sourceMappingURL=sidepanel.js.map