// Local Journal Save
function saveJournal() {
    const entry = document.getElementById("journal").value;
    localStorage.setItem("journalEntry", entry);
    alert("Your journal is saved on your device only.");
}

// Load Saved Journal
window.onload = function () {
    const saved = localStorage.getItem("journalEntry");
    if (saved) document.getElementById("journal").value = saved;
    newAffirmation();
};

// Affirmations List
const affirmations = [
    "You are powerful beyond measure.",
    "Your voice matters.",
    "You are growing every day.",
    "You are worthy of love and success.",
    "Your dreams are valid.",
    "You can overcome anything.",
    "You are brilliant, brave, and beautiful."
];

function newAffirmation() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("affirmationText").innerText = random;
}

// Service Worker Registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}