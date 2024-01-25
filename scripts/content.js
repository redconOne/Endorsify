const endorseAllBtn = document.getElementById("endorseAllBtn");

endorseAllBtn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTabId = tabs[0]?.id;

    if (currentTabId) {
      chrome.scripting.executeScript({
        target: { tabId: currentTabId, allFrames: true },
        files: ["./scripts/endorse.js"],
      });
    }
  });
};
