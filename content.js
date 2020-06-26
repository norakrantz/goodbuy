const productLinks = document.getElementsByClassName('p13n-sc-truncated')

console.log(productLinks)

for (let i = 0; i < productLinks.length; i++) {
    console.log(i, productLinks[i].innerHTML)
}