const  products = [{
    id: 1,
    name: 'lemon verbena multi-surface everyday cleaner',
    description: 'everyday cleaner',
    price: 399,
    imageUrl: 'https://cdn11.bigcommerce.com/s-lxgmmudw7i/images/stencil/1280x1280/products/724/971/mrs_meyers_lemon_verbena_multi_surface_everyday_cleaner__94829.1580380131.png?c=2&imbypass=on',
    productUrl: 'https://www.mrsmeyers.com/product/household-cleaners/multi-surface-glass-cleaners/multi-surface-cleaner-lemon-verbena/',
    store: 2
},
{
    id: 2,
    name: 'all purpose spray – peppermint & lemon',
    description: 'all purpose spray',
    price: 579,
    imageUrl: 'https://www.rebelgreen.com/wp-content/uploads/2019/09/Square-AllPurposeSprayYELLOW_Biz.jpg',
    productUrl: 'https://www.rebelgreen.com/product/all-purpose-spray-peppermint-lemon/',
    store: 1
},
{
    id: 3,
    name: 'ProdName',
    price: 0,
    imageUrl: '',
    productUrl: '',
    store: 0
}]

const stores = [{
    id: 1,
    name: 'rebelgreen',
    url: 'https://www.rebelgreen.com',
    tags: [1, 4]
},
{
    id: 2,
    name: "mrs. meyer's",
    url: 'https://www.mrsmeyers.com/',
    tags: [4]
},
{
    id: 3,
    name: 'store',
    url: '',
    tags: []
}]


const badProduct = document.getElementById('productTitle')
const badStore = document.getElementById('bylineInfo')

console.log('badProduct: ', badProduct.innerText.toLowerCase())
console.log('badStore: ', badStore.innerText.toLowerCase())

const results = {
    goodProducts: [],
    goodStores: []
}

const findProdMatches = (productName) => {
    for (let i = 0; i < products.length; i++) {
        if (productName.toLowerCase().includes(products[i].description)) {
            console.log('found a product match: ', products[i].name)
            results.goodProducts.push(products[i])
        }
    }
}

const findStoreMatches = (storeName) => {
    for (let i = 0; i < stores.length; i++) {
        if (stores[i].name.includes(storeName.toLowerCase()) || storeName.toLowerCase().includes(stores[i].name)) {
            console.log('found a store match: ', stores[i].name)
            results.goodStores.push(stores[i])
        }
    }
}


if (badProduct) {
    console.log('looking...')
    findProdMatches(badProduct.innerText)
    findStoreMatches(badStore.innerText)
}

if (results.goodProducts.length || results.goodStores.length) {
    console.log('sending data to background.js')
    chrome.runtime.sendMessage(results)
}







// window.onload = function() {
//     console.log('page loaded')
// }

// chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//       chrome.tabs.onCreated.addListener((tabs[0].id) {
//       subs: JSON.stringify(subs),
//       action: ‘store’
//       });
//     });

// const banner = document.createElement('div')
// const badgeWrapper = document.querySelector('.badge-wrapper')
// badgeWrapper.appendChild(banner)
// badgeWrapper.style.backgroundColor = 'blue'
// banner.id = 'banner'
// console.log(banner)
// const text = document.createElement('p')
// banner.appendChild(text)
