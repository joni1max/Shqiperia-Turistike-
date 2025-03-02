// Smooth Scroll to Sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form Submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We will get back to you soon.");
});
