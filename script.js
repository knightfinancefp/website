// ===============================
// KNIGHT FINANCE - SCRIPT.JS
// ===============================

// Smooth scroll to contact + select package
function selectPackage(packageName) {

    // Scroll to contact section
    const contactSection = document.getElementById("contact");

    contactSection.scrollIntoView({
        behavior: "smooth"
    });

    // Wait for scroll then set dropdown value
    setTimeout(() => {

        const packageDropdown = document.getElementById("package");

        if (packageDropdown) {
            packageDropdown.value = packageName;
        }

    }, 600);
}


// ===============================
// OPTIONAL: simple fade-in on scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(".card, .feature").forEach(el => {
    observer.observe(el);
});