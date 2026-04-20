
        // PopupNotification component
        const PopupNotification = {
            name: 'PopupNotification',
            props: {
                visible: { type: Boolean, default: false },
                title: { type: String, default: "Notification" },
                message: { type: String, default: "This is a reusable popup." },
                buttonText: { type: String, default: "Close" }
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
                handleClose() { this.$emit('close'); }
            }
        };

        // ----- HOME page component (Hero + Timeline + Testimonials) -----
        const HomePage = {
            template: `
                <main>
                    <!-- Home section -->
                    <section id="Home">
                        <header class="hero">
                            <div class="hero-container">
                                <aside class="socials">
                                    <a href="#"><img src="/Pictures/icons/linkedin-svgrepo-com.svg" alt="LinkedIn"></a>
                                    <a href="#"><img src="/Pictures/icons/github-svgrepo-com.svg" alt="GitHub"></a>
                                    <a href="#"><img src="/Pictures/icons/email-1573-svgrepo-com.svg" alt="Email"></a>
                                </aside>
                                <div class="hero-content">
                                    <h1>I'm Cameron Bowers</h1>
                                    <h2>An Aspiring Developer</h2>
                                    <a href="#" class="cta">SEE MY CV</a>
                                </div>
                                <figure class="hero-image">
                                    <img src="/Pictures/selfie.jpg" alt="Cameron Bowers">
                                </figure>
                            </div>
                        </header>
                    </section>

                    <!-- Experience / Timeline -->
                    <section id="Experience">
                        <div class="timeline">
                            <h2>My Coding Journey</h2>
                            <div class="timeline-container">
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2019</h3><p>The end of my high school career and the start of my coding journey where I learnt the basics of web development such as HTML and CSS.</p></div>
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2020</h3><p>I went to Codespace to further pursue my coding journey and completed a 4 month PHP course.</p></div>
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2021</h3><p>After Codespace I started Lifechoices to further my knowledge of coding and gain work experience.</p></div>
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2022</h3><p>Graduated at Lifechoices as a full-stack Web and WordPress Developer and began searching for a job.</p></div>
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2023</h3><p>Started freelancing in WordPress with a friend and continued working on freelance projects.</p></div>
                                <div class="timeline-item"><div class="timeline-dot"></div><h3>2026</h3><p>Started the Red & Yellow frontend course while continuing freelancing and building projects.</p></div>
                            </div>
                        </div>
                    </section>

                    <!-- Testimonials -->
                    <section id="Testimonials">
                        <div class="testimonials">
                            <h2>Testimonials</h2>
                            <p class="subtitle">What people say about working with me</p>
                            <div class="testimonial-container">
                                <div class="testimonial-card"><p class="testimonial-text">"Cameron can be described as a smart worker, so much different from any other clients you’ll have. He achieves expectations and even surpasses them. He would be a great addition to your team."</p><div class="testimonial-author"><h3>Dalarno Van Rooi</h3></div></div>
                                <div class="testimonial-card"><p class="testimonial-text">"Cameron has a natural talent when it comes to solving technical problems. He has great attention to detail."</p><div class="testimonial-author"><h3>Alex Sexwale</h3></div></div>
                                <div class="testimonial-card"><p class="testimonial-text">"Cameron pays attention to improving both the aesthetics and functionality of a site. He works through issues as they arise and takes tremendous pride in his work. I wouldn’t hesitate to recommend him."</p><div class="testimonial-author"><h3>Yaasien Salam</h3></div></div>
                            </div>
                        </div>
                    </section>
                </main>
            `
        };

        // ----- ABOUT page component (About section + Projects) -----
        const AboutPage = {
            template: `
                <main>
                    <section id="About"> 
                        <div class="about">
                            <h1>About Me</h1>
                            <div class="about-container">
                                <article class="about-left">
                                    <h2>About Me</h2>
                                    <div class="divider"></div>
                                    <p>I am a 21 year old aspiring full-stack and WordPress developer who loves learning new things, born and raised in South Africa. I attended Bergvliet High school and matriculated in 2019. I did a 4 month course at Codespace and a 1 year course at Lifechoices to pursue my passion of coding.</p>
                                    <ul class="about-details"><li><strong>Name:</strong> Cameron Bowers</li><li><strong>Residence:</strong> South Africa, Cape Town</li></ul>
                                </article>
                                <article class="about-right">
                                    <h2>Developing With a Passion</h2>
                                    <div class="divider"></div>
                                    <p>I am a Web Developer, and I'm very passionate and dedicated to my work. With my experience as a Web developer, I have acquired the skills and the ability to make any project come to life.</p>
                                    <ul class="contact"><li><strong>Email:</strong> cameronbowers22@gmail.com</li><li><strong>Phone:</strong> (+27) 72 964 4591</li></ul>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section id="Projects">
                        <div class="projects">
                            <h2 class="section-title">My Projects</h2>
                            <div class="projects-container">
                                <article class="project-card"><div class="project-image"><img src="/Pictures/Bluemoon.PNG" alt="Bluemoon Website"><div class="project-overlay"><h3>Bluemoon Tobacco</h3><p>WordPress Website</p><div class="project-links"><a href="https://www.bluemoontabacco.co.za/" target="_blank">Live</a></div></div></div></article>
                                <article class="project-card"><div class="project-image"><img src="/Pictures/Razzle.PNG" alt="Razzle Dazzle Rugby Website"><div class="project-overlay"><h3>Razzle Dazzle Rugby</h3><p>WordPress website</p><div class="project-links"><a href="https://razzlerugby.co.za/" target="_blank">Live</a></div></div></div></article>
                                <article class="project-card"><div class="project-image"><img src="/Pictures/Haarts.PNG" alt="Haarts Cleaning Website"><div class="project-overlay"><h3>Haartz Cleaning</h3><p>WordPress website</p><div class="project-links"><a href="https://www.haartzcleaning.co.za/" target="_blank">Live</a></div></div></div></article>
                                <article class="project-card"><div class="project-image"><img src="/Pictures/Pondo.PNG" alt="Pondo Tours Website"><div class="project-overlay"><h3>Pondo Tours</h3><p>WordPress website</p><div class="project-links"><a href="https://pondotours.co.za/" target="_blank">Live</a></div></div></div></article>
                            </div>
                        </div>
                    </section>
                </main>
            `
        };

        // ----- CONTACT page component (Contact form only) -----
        const ContactPage = {
            template: `
                <section id="Contact">
                    <h2>Contact Me</h2>
                    <div id="contactApp">
                        <form @submit.prevent="handleSubmit" class="contact-form">
                            <div :class="['form-group', errors.name ? 'error' : (form.name ? 'success' : '')]">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" id="name" placeholder="Your Name">
                                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                            <div :class="['form-group', errors.email ? 'error' : (form.email && form.email.includes('@') ? 'success' : '')]">
                                <label for="email">Email</label>
                                <input type="email" v-model="form.email" id="email" placeholder="your.email@example.com">
                                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                            </div>
                            <div :class="['form-group', errors.message ? 'error' : (form.message ? 'success' : '')]">
                                <label for="message">Message</label>
                                <textarea v-model="form.message" id="message" rows="5" placeholder="Type your message here..."></textarea>
                                <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                            </div>
                            <button type="submit">Send Message</button>
                            <p v-if="successMessage" class="success">{{ successMessage }}</p>
                        </form>
                        <popupnotification :visible="showPopup" title="Message Sent" message="Thanks! I'll get back to you soon." button-text="Got it" @close="showPopup = false" />
                    </div>
                </section>
            `,
            data() {
                return {
                    form: { name: "", email: "", message: "" },
                    errors: {},
                    successMessage: "",
                    showPopup: false
                };
            },
            methods: {
                validateForm() {
                    this.errors = {};
                    if (!this.form.name) this.errors.name = "Name is required";
                    else if (this.form.name.trim().length < 2) this.errors.name = "Name must be at least 2 characters";
                    if (!this.form.email) this.errors.email = "Email is required";
                    else if (!this.form.email.includes("@") || !this.form.email.includes(".")) this.errors.email = "Enter a valid email address";
                    if (!this.form.message) this.errors.message = "Message is required";
                    else if (this.form.message.trim().length < 5) this.errors.message = "Message must be at least 5 characters";
                    return Object.keys(this.errors).length === 0;
                },
                handleSubmit() {
                    if (this.validateForm()) {
                        console.log("Form submitted:", this.form);
                        this.successMessage = "Message sent successfully!";
                        this.showPopup = true;
                        this.form = { name: "", email: "", message: "" };
                        setTimeout(() => { this.successMessage = ""; }, 3000);
                    } else {
                        this.showPopup = false;
                        this.successMessage = "";
                    }
                }
            }
        };

        // Vue Router setup
        const routes = [
            { path: '/', component: HomePage, name: 'Home' },
            { path: '/about', component: AboutPage, name: 'About' },
            { path: '/contact', component: ContactPage, name: 'Contact' }
        ];

        const router = VueRouter.createRouter({
            history: VueRouter.createWebHistory(),
            routes,
            scrollBehavior(to, from, savedPosition) {
                if (savedPosition) return savedPosition;
                return { top: 0, behavior: 'smooth' };
            }
        });

        const app = Vue.createApp({});
        app.component('popupnotification', PopupNotification);
        app.use(router);
        app.mount('#app');
