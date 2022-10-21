console.log('background running');

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab);
}