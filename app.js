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
  const PopupNotification = {
            name: 'PopupNotification',
            props: {
                visible: {
                    type: Boolean,
                    default: false
                },
                title: {
                    type: String,
                    default: "Notification"
                },
                message: {
                    type: String,
                    default: "This is a reusable popup."
                },
                buttonText: {
                    type: String,
                    default: "Close"
                }
            },
            emits: ['close'],
            template: `
                <div class="reusable-popup-overlay" :class="{ active: visible }" @click.self="handleClose">
                    <div class="reusable-popup-card">
                        <h3>{{ title }}</h3>
                        <p>{{ message }}</p>
                        <button @click="handleClose">{{ buttonText }}</button>
                    </div>
                </div>
            `,
            methods: {
                handleClose() {
                    this.$emit('close');
                }
            }
        };

        const InlineAlert = {
            props: ['type', 'message', 'show'],
            template: `
                <div v-if="show" class="inline-alert" :class="'alert-' + type" style="margin-top: 16px; padding: 10px; border-radius: 30px; background: #eef2ff; font-size: 14px; text-align: center;">
                    {{ message }}
                </div>
            `
        };

        // Create Vue app and register components globally (or locally)
        const { createApp } = Vue;

        const app = createApp({
            data() {
                return {
                    form: {
                        name: "",
                        email: "",
                        message: ""
                    },
                    errors: {},
                    successMessage: "",
                    showPopup: false      // controls the reusable popup component
                };
            },
            methods: {
                validateForm() {
                    this.errors = {};

                    if (!this.form.name) {
                        this.errors.name = "Name is required";
                    } else if (this.form.name.trim().length < 2) {
                        this.errors.name = "Name must be at least 2 characters";
                    }

                    if (!this.form.email) {
                        this.errors.email = "Email is required";
                    } else if (!this.form.email.includes("@") || !this.form.email.includes(".")) {
                        this.errors.email = "Enter a valid email address";
                    }

                    if (!this.form.message) {
                        this.errors.message = "Message is required";
                    } else if (this.form.message.trim().length < 5) {
                        this.errors.message = "Message must be at least 5 characters";
                    }

                    return Object.keys(this.errors).length === 0;
                },

                handleSubmit() {
                    if (this.validateForm()) {
                        // log submission (mock API call)
                        console.log("✅ Form submitted successfully:", this.form);
                        
                        // show success inline message (optional)
                        this.successMessage = "Message sent successfully!";
                        
                        // trigger the reusable popup component (true = visible)
                        this.showPopup = true;
                        
                        // reset form fields after successful submission
                        this.form = { name: "", email: "", message: "" };
                        
                        // clear success message after 4 seconds (non-intrusive)
                        setTimeout(() => {
                            if (this.successMessage) this.successMessage = "";
                        }, 3000);
                    } else {
                        // if validation fails, we keep errors visible and ensure popup is hidden
                        this.showPopup = false;
                        this.successMessage = "";
                        console.warn("Validation errors", this.errors);
                    }
                }
            }
        });


        app.component('popupnotification', PopupNotification);

        app.component('InlineAlert', InlineAlert);
        
        // Mount the app to #app
        app.mount("#app");

        const styleForDemo = document.createElement('style');
        styleForDemo.textContent = `
            .inline-alert.alert-success {
                background: #dcfce7;
                color: #15803d;
                border-left: 3px solid #22c55e;
            }
            .inline-alert.alert-error {
                background: #fee2e2;
                color: #b91c1c;
            }
        `;