import { startElementInspector } from "./inspectElement.js";
export const getSourceCode = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (currentTab?.id) {
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                func: () => document.documentElement.outerHTML
            }, (injectionResults) => {
                if (injectionResults && injectionResults[0]) {
                    const sourceCode = injectionResults[0].result;
                    console.log('Page Source:', sourceCode);
                    // Do something with the source code
                }
            });
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                func: startElementInspector
            });
        }
    });
};
