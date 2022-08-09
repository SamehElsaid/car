let menu = document.querySelector(".menu")
let links = document.querySelector(".links")
let scrollUp = document.querySelector(".scrollUp")
menu.addEventListener("click", function (e) {
    menu.classList.toggle("active")
    links.classList.toggle("active")
})

let header = document.querySelector("header")
window.addEventListener("scroll", function (e) {
    if (this.scrollY >= 50) {
        header.classList.add("active")
        scrollUp.classList.add("active")
    } else {
        header.classList.remove("active")
        scrollUp.classList.remove("active")

        header.classList.add("noActive")

    }
})
window.addEventListener("load", function (e) {
    document.querySelector("body").classList.add("animationa")
})
window.onscroll = function (e) {
    let popular = document.querySelector(".popular")
    let about = document.querySelector(".about")
    let features = document.querySelector(".features")
    let offer = document.querySelector(".offer")
    let logoanimation = document.querySelector(".logoanimation")
    let footer = document.querySelector('footer')
    let aboutActive = document.querySelector(".aboutActive")
    let popularActive = document.querySelector(".popularActive")
    let featuredActive = document.querySelector(".featuredActive")
    let homeActive = document.querySelector(".homeActive")
    let linksA = document.querySelectorAll(".links a")
    if (window.scrollY >= homeActive.offsetTop - 200) {
        linksA.forEach(function (e) {
            e.classList.remove("active")
        })
        homeActive.classList.add("active")

    }
    if (window.scrollY >= about.offsetTop - 200) {
        about.classList.add("animationa");
        linksA.forEach(function (e) {
            e.classList.remove("active")
        })
        aboutActive.classList.add("active")

    } if (window.scrollY >= popular.offsetTop - 200) {
        popular.classList.add("animationa")
        linksA.forEach(function (e) {
            e.classList.remove("active")
        })
        popularActive.classList.add("active")


    } if (window.scrollY >= features.offsetTop - 200) {
        features.classList.add("animationa")
        linksA.forEach(function (e) {
            e.classList.remove("active")
        })
        featuredActive.classList.add("active")

    } if (window.scrollY >= offer.offsetTop - 200) {
        offer.classList.add("animationa")

    } if (window.scrollY >= logoanimation.offsetTop - 300) {
        logoanimation.classList.add("animationa")

    } if (window.scrollY >= footer.offsetTop - 400) {
        footer.classList.add("animationa")

    }
}
let audiBtn = document.querySelector('.audiBtn')
let allimg = document.querySelector('.allimg')
let teslaBtn = document.querySelector('.teslaBtn')
let porscheBtn = document.querySelector('.porscheBtn')
let audi = document.querySelector(".audi")
let tesla = document.querySelectorAll(".tesla")
let boxAll = document.querySelectorAll(".boxAll")
let porsche = document.querySelectorAll(".porsche")
let allBtn = document.querySelectorAll(".features button")
let openAll = document.querySelectorAll(".openAll")
let buttonAll = document.querySelectorAll(".allBtn")
// 
buttonAll.forEach(function (e) {
    e.addEventListener("click", function () {
        boxAll.forEach(function (e) {
            e.style.display = "block"
            e.classList.add("animation")
        })

    })

})
// 
allimg.addEventListener("click", function () {

    audi.style.display = "block"
    allBtn.forEach(function (e) {
        e.classList.remove("active")

    })

    allimg.classList.add("active")
})
audiBtn.addEventListener("click", function () {
    boxAll.forEach(function (e) {
        e.style.display = "none"
    })
    audi.style.display = "block"

    allBtn.forEach(function (e) {
        e.classList.remove("active")
    })
    audiBtn.classList.add("active")

})
teslaBtn.addEventListener("click", function () {
    boxAll.forEach(function (e) {
        e.style.display = "none"

    })
    tesla.forEach(function (e) {
        e.style.display = "block"

    })
    allBtn.forEach(function (e) {
        e.classList.remove("active")

    })
    teslaBtn.classList.add("active")

})
porscheBtn.addEventListener("click", function () {
    boxAll.forEach(function (e) {
        e.style.display = "none"

    })
    porsche.forEach(function (e) {
        e.style.display = "block"

    })
    allBtn.forEach(function (e) {
        e.classList.remove("active")
    })
    porscheBtn.classList.add("active")

})

// 
