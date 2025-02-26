// Animace psaní textu
const text = "Welcome on offical Tech By Lucker's website !";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});

// Fade-in efekt při skrolování
const sections = document.querySelectorAll(".content");

const revealOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
