
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

//Slider Activation//
var sliderleft = document.getElementById("slider-left-activate")
var sliderright = document.getElementById("slider-right-activate")
var sliderimg = document.querySelector(".slider-img-container")
var slidermargin = 0

sliderright.addEventListener("click", function () {
    slidermargin = slidermargin + 100

    if (slidermargin > 200) {
        slidermargin = 0
        sliderimg.style.marginLeft = 0;
    }
    else {
        sliderimg.style.marginLeft = "-" + slidermargin + "vw"
    }
})

sliderleft.addEventListener("click", function () {

    if (slidermargin == 0) {
        slidermargin = 200
        sliderimg.style.marginLeft = "-" + slidermargin + "vw";
    }

    else {
        slidermargin = slidermargin - 100
        sliderimg.style.marginLeft = "-" + slidermargin + "vw";
    }

})

//Like Buttos//
var likebuttons = document.querySelectorAll(".like-btn")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="./images/redheart.jpg"
        }
        
        else{
            e.target.src="./images/blackheart.png"
        }
    })
})
