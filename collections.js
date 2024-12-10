
//OfferBox//

var offerbar = document.querySelector(".offerbar")
document.getElementById("offer-close").addEventListener("click", function () {
    offerbar.style.display = "none"
})

//Side Navbar//

var openmenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
var closemenu = document.getElementById("side-navbar-close")

openmenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"

})

closemenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "-60%"
})



//Search Function

var search = document.getElementById("search")
var container = document.getElementById("container")
var productlist = container.querySelectorAll("div")

//console.log(productlist)==>Idendify the product 

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }

        else {
            productlist[count].style.display = "block"
        }
    }

})


// Products filter function

function filterProducts() {
    
    const checkedFilters = Array.from(document.querySelectorAll('.filter-section input:checked')).map(input => input.value.toLowerCase());

    
    const products = document.querySelectorAll('.products > div');

    products.forEach(product => {
        const productTags = product.querySelector('tag').textContent.toLowerCase().split(',');

        const matches = checkedFilters.every(filter => productTags.includes(filter));

       product.style.display = checkedFilters.length === 0 || matches ? 'block' : 'none';
    });
}

document.querySelectorAll('.filter-section input').forEach(input => {
    input.addEventListener('change', filterProducts);
});
