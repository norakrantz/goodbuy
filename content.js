//CONTENT.JS
//find product name/store name, look for matches, if (match) show badge until pageAction click and send match obj/objs to popup.js
import products from './data/products'
import stores from './data/stores'

const badProduct = document.getElementById('productTitle')
const badStore = document.getElementById('bylineInfo')
const results = {
    goodProducts: [],
    goodStores: []
}

const findProdMatches = (product) => {
    for (let i = 0; i < products.length; i++) {
        if (product.innerText.includes(products[i].name)) results.goodProducts.push(products[i])
    }
}

const findStoreMatches = (store) => {
    for (let i = 0; i < stores.length; i++) {
        if (stores[i].name.includes(store.innerText) || store.innerText.includes(stores[i].name)) results.goodStores.push(stores[i])
    }
}

// window.onload = function() {
//     console.log('page loaded')
// }

if (badProduct) {
    findProdMatches(badProduct)
    findStoreMatches(badStore)
}

// chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//       chrome.tabs.onCreated.addListener((tabs[0].id) {
//       subs: JSON.stringify(subs),
//       action: ‘store’
//       });
//     });







// const singlePageView = document.getElementsByClassName('dp')

//ac-badge-wrapper and badge-wrapper

// const banner = document.createElement('div')
// const badgeWrapper = document.querySelector('.badge-wrapper')
// badgeWrapper.appendChild(banner)
// badgeWrapper.style.backgroundColor = 'blue'
// banner.id = 'banner'
// console.log(banner)
// const text = document.createElement('p')
// banner.appendChild(text)

// const bestsellerImages  = document.getElementsByClassName('p13n-sc-dynamic-image')

// for (let i = 0; i < bestsellerImages.length; i++) {
//     if (bestsellerImages[i].alt.length > 1) console.log('bestseller', i, bestsellerImages[i].alt)
// }

// const searchImages = document.getElementsByClassName('s-image')

// for (let i = 0; i < searchImages.length; i++) {
//     if (searchImages[i].alt.length > 1) console.log('search', i, searchImages[i].alt)
// }
