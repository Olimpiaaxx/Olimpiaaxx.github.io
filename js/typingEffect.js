const phrases = [
    "Software Engineer",
    "Testability Champion",
];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    const typingElement = document.getElementById("typing");

    if (charIndex < phrases[phraseIndex].length) {
        typingElement.innerHTML += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Pause before erasing
    }
}

function erase() {
    const typingElement = document.getElementById("typing");

    if (charIndex > 0) {
        typingElement.innerHTML = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
        setTimeout(type, 500); // Pause before typing the next phrase
    }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", type);
