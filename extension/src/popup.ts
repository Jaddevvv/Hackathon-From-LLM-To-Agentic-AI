
// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  
  if (actionBtn) {
    actionBtn.addEventListener('click', async () => {
      // Get the current active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab.id) {
        // Inject the content script if not already injected
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['dist/content.js']
        });

        // Send message to content script to inject counter
        chrome.tabs.sendMessage(tab.id, { action: 'INJECT_COUNTER' }, (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error:', chrome.runtime.lastError);
          } else {
            console.log('Counter injected:', response);
          }
        });
      }
    });
  } else {
    console.error('Action button not found in the DOM');  
  }
});

