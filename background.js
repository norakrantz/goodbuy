console.log('background.js running')

chrome.browserAction.onClicked.addListener(tab => {
        let msg = {
            txt: "hello"
        }
        chrome.tabs.sendMessage(tab.id, msg)
    }
)
