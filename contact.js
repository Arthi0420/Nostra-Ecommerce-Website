
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

