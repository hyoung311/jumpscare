console.log('background running');

browser.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab);
}