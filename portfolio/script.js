// ----------------------------
// PROFESSIONAL NAV & SECTION JS
// ----------------------------

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav ul li a");

let currentIndex = 0;

// Function to show sections based on nav click
function showSection(index) {
    const targetId = navLinks[index].getAttribute("href").substring(1);

    sections.forEach((sec) => {
        if (targetId === "home") {
            // Home clicked → show all sections
            sec.style.display = "block";
            sec.classList.add("visible");
        } else {
            // Other section clicked → show only that section
            if (sec.id === targetId) {
                sec.style.display = "block";
                sec.classList.add("visible");
            } else {
                sec.style.display = "none";
                sec.classList.remove("visible");
            }
        }
    });

    // Update nav active link
    navLinks.forEach((link, i) => {
        link.classList.toggle("active-link", i === index);
    });

    currentIndex = index;

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Navbar click events
navLinks.forEach((link, i) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(i);
    });
});

// Show Home by default
document.addEventListener("DOMContentLoaded", () => {
    showSection(0);
});