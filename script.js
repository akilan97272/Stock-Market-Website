// script.js

// Function to highlight the active navigation link
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let links = document.querySelectorAll(".navbar ul li a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#FFD700"; // Highlight active link in gold
        }
    });
});

// Simple stock market fact generator
const facts = [
    "The stock market was first created in 1602 in Amsterdam.",
    "Warren Buffett bought his first stock at the age of 11.",
    "The NYSE is the largest stock exchange in the world.",
    "Bear markets occur when stock prices fall 20% or more."
];

function showRandomFact() {
    const factIndex = Math.floor(Math.random() * facts.length);
    alert("Did you know? " + facts[factIndex]);
}
