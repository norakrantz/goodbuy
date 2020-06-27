chrome.runtime.onMessage.addListener((msg, sender, response) => {

    console.log('message received', msg)

    chrome.storage.local.set(msg, function() {
        console.log('setting local storage to:', msg)
    })

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.browserAction.setBadgeText({
            'text': ' ', 
            'tabId': tabs[0].id
        })
        chrome.browserAction.setBadgeBackgroundColor({
            'color': [255, 0, 0, 0],
            'tabId': tabs[0].id
        })
    })

    // chrome.browserAction.setBadgeText({'text': ' '})
})




// chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//       chrome.tabs.onCreated.addListener((tabs[0].id) {
//       subs: JSON.stringify(subs),
//       action: ‘store’
//       });
//     });