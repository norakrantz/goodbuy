console.log('background.js running')

//upon receipt of message with data (matches) from content.js, set on window for popup.js

const data = {}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log('message received', msg)
    data.match = msg
})


// chrome.browserAction.onClicked.addListener((tab) => {
//     console.log('button clicked', tab)
//     if (tab.url.includes('https://www.amazon.com')) {
//         chrome.runtime.onMessage.addListener((msg, sender, response) => {
//             if (msg) {
//                 console.log('message received', msg)
//             }
//         })
//     }
// })

