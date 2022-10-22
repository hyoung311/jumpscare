console.log('background running!');

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['popup.js']
    });
  });

function buttonClicked(tab) {
    console.log(tab);
}