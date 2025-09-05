// ====== NAVBAR TOGGLE FOR MOBILE ======
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// ====== SMOOTH SCROLLING FOR NAV LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Close menu after clicking (on mobile)
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// ====== FORM SUBMISSION HANDLER ======
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name && email && message) {
      console.log("Form submitted:", { name, email, message });
      alert("Thank you for reaching out, " + name + "! I'll get back to you soon.");
      contactForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}
