const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu
burger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering document click
    navMenu.classList.toggle("active");
});

// Auto-close when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickBurger) {
        navMenu.classList.remove("active");
    }
});

// POPUP
const form = document.querySelector(".contact-form");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", function(e){
    e.preventDefault(); // stop actual form submit
    popup.classList.add("active");
    form.reset(); // clear form
});

closeBtn.addEventListener("click", function(){
    popup.classList.remove("active");
});
