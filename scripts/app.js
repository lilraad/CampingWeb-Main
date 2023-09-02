const navBtn = document.querySelector(".navBtn")
const navMenu = document.querySelector(".mobileNavMenu")

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("navBtn--open")
        navMenu.classList.remove("mobileNavMenu--open")

        navOpen = false
    } else {
        navBtn.classList.add("navBtn--open")
        navMenu.classList.add("mobileNavMenu--open")
        navOpen = true
    }
})