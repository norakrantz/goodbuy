const tags = {
    1: "womenOwned",
    2: "blackOwned",
    3: "fairTrade",
    4: "sustainable",
    5: "charitable",
    6: "smallBusiness"
}

let matches

document.addEventListener('DOMContentLoaded', function () {

    chrome.storage.local.get(function(res) {

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.browserAction.setBadgeText({
                'text': '', 
                'tabId': tabs[0].id
            })
            chrome.browserAction.setBadgeBackgroundColor({
                'color': [0, 0, 0, 0],
                'tabId': tabs[0].id
            })
        })

        const {goodProducts, goodStores} = res

        document.getElementById('prodName').innerText = `better buy: ${goodProducts[0].name}`
        // document.getElementById('prodImage').src = goodProducts[0].imageUrl
    })

})





//getBackgroundPage from background.js window to determine when to set badge

// const pic = document.getElementById("general")
// console.log(pic)

// document.getElementById('general').style.display = "none"
