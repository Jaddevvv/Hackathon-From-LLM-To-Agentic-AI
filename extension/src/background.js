

  chrome.action.onClicked.addListener((tab) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log('Actual Tab: ', tabs[0]);
        console.log('All Tabs: ', tabs);
        const currentTab = tabs[0];
        console.log('Current Tab: ', currentTab);
        if (currentTab) {
          console.log("Current Tab URL:", currentTab.url);
          // You can also do other things with the current URL here
        }
      });
    });
    

console.log('Background script loaded');