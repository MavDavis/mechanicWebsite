AOS.init();

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", displayNavbar);

function displayNavbar() {
    let header = document.getElementById("header");
    let navbar = document.getElementById("navbar");
    header.classList.toggle("displayHeader");
    navbar.classList.toggle("displayNavbar");
}