console.log('chrome extension')

const productLinks = document.getElementsByClassName('p13n-sc-truncated')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.txt === "hello") console.log('productLinks', productLinks)
})