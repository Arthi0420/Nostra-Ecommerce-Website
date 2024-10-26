
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

//CheckBox Function

// var tags = document.getElementsByTagName("tags")
// var products = document.getElementById("products")
// occasion = []

// for (count = 0; count < tags.length; count = count + 1) {
//     tags[count].addEventListener("click", function () {
//         if (event.target.checked) {
//             console.log("checked")
//             occasion.push(event.target.value)
//             products.textContent = occasion
//             tags.style.display = "none"
//         }

//         else {
//             console.log("unchecked")
//             var index = occasion.indexOf(event.target.value)
//             occasion.splice(index, 1)
//             products.textContent = occasion
//             tags.style.display = "block"
//         }
//     }
//     )
// }

