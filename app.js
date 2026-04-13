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



// VUE CONTACT FORM
const { createApp } = Vue;

createApp({
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      errors: {},
      successMessage: "",
      showPopup: false
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name) {
        this.errors.name = "Name is required";
      }

      if (!this.form.email) {
        this.errors.email = "Email is required";
      } else if (!this.form.email.includes("@")) {
        this.errors.email = "Enter a valid email";
      }

      if (!this.form.message) {
        this.errors.message = "Message is required";
      }

      return Object.keys(this.errors).length === 0;
    },

    handleSubmit() {
      if (this.validateForm()) {
        console.log("Form submitted:", this.form);

        this.successMessage = "Message sent successfully!";
        this.showPopup = true; // 👈 triggers popup

        this.form = { name: "", email: "", message: "" };
      }
    }
  }
}).mount("#app");