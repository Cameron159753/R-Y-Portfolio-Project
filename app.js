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

closeBtn.addEventListener("click", function(){
    popup.classList.remove("active");
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Helper functions
    function setError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector(".error-message");

        errorDisplay.innerText = message;
        errorDisplay.style.display = "block";

        formGroup.classList.add("error");
        formGroup.classList.remove("success");
    }

    function setSuccess(input) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector(".error-message");

        errorDisplay.innerText = "";
        errorDisplay.style.display = "none";

        formGroup.classList.remove("error");
        formGroup.classList.add("success");
    }

    // Name validation
    if (name === "") {
        setError(nameInput, "Name cannot be empty");
        isValid = false;
    } else if (!namePattern.test(name)) {
        setError(nameInput, "Only letters allowed");
        isValid = false;
    } else {
        setSuccess(nameInput);
    }

    // Email validation
    if (!emailPattern.test(email)) {
        setError(emailInput, "Enter a valid email");
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    // Message validation
    if (message === "") {
        setError(messageInput, "Message cannot be empty");
        isValid = false;
    } else if (message.length < 10) {
        setError(messageInput, "At least 10 characters required");
        isValid = false;
    } else {
        setSuccess(messageInput);
    }

    // If valid → show popup
    if (isValid) {
        popup.classList.add("active");
        form.reset();

        // remove success styles after reset
        document.querySelectorAll(".form-group").forEach(group => {
            group.classList.remove("success");
        });
    }
});

