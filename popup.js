const tags = {
    1: "womenOwned",
    2: "blackOwned",
    3: "fairTrade",
    4: "sustainable",
    5: "charitable",
    6: "smallBusiness"
}

document.addEventListener('DOMContentLoaded', function () {
    // chrome.runtime.getBackgroundPage(function(window) {
    //     console.log(window.data)
    // })
    chrome.storage.local.get(function(res) {
        console.log('access local storage in popup', res)
    })
})

//getBackgroundPage from background.js window to determine when to set badge
// chrome.browserAction.setBadgeText

// const pic = document.getElementById("general")
// console.log(pic)

// document.getElementById('general').style.display = "none"
