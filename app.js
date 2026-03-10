// 1. Journal Logic - Save to Phone Memory
function saveJournal() {
    const journalInput = document.getElementById('journal');
    const statusText = document.querySelector('section p'); // The small text under the button

    if (journalInput.value.trim() !== "") {
        // Save the text into the browser's storage
        localStorage.setItem('userJournal', journalInput.value);
        
        // Show a quick success message
        statusText.innerText = "✅ Saved to your device!";
        statusText.style.color = "#2ecc71";
        
        setTimeout(() => {
            statusText.innerText = "Your journal is private to this device.";
            statusText.style.color = "#636e72";
        }, 3000);
    }
}

// 2. Auto-Load Journal on Startup
window.onload = function() {
    const savedText = localStorage.getItem('userJournal');
    if (savedText) {
        document.getElementById('journal').value = savedText;
    }
};

// 3. Affirmation Logic
function newAffirmation() {
    const affirmations = [
        "You are powerful beyond measure.",
        "Your potential is limitless.",
        "You deserve to be heard and respected.",
        "Every step forward is a victory.",
        "You are the architect of your own future."
    ];
    
    const display = document.getElementById('affirmation-display');
    
    // Add a quick fade-out effect
    display.style.opacity = 0;
    
    setTimeout(() => {
        const random = affirmations[Math.floor(Math.random() * affirmations.length)];
        display.innerText = `"${random}"`;
        display.style.opacity = 1;
    }, 200);
}
