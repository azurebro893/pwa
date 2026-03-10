// 1. App initialization and date/time update
function updateTime() {
    const now = new Date();
    
    // Format Date: e.g., October 26, 2023
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);
    
    // Format Time: e.g., 2:34 PM
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    document.getElementById('current-date').innerText = dateStr;
    document.getElementById('current-time').innerText = timeStr;
}

// 2. Journal Logic - Save, Timestamp, Clear, and Confirm
function saveJournal() {
    const journalInput = document.getElementById('journal');
    const statusText = document.getElementById('status-text');
    const entry = journalInput.value.trim();

    if (entry !== "") {
        // Prepare the entry with a detailed timestamp
        const timestamp = new Date();
        const detailedTime = timestamp.toLocaleTimeString() + ' ' + timestamp.toLocaleDateString();
        const entryWithTime = entry + " (Logged: " + detailedTime + ")";
        
        // Save the complex entry locally
        localStorage.setItem('lastBayaJournalEntry', entryWithTime);
        
        // --- YOUR REQUEST: Make the text disappear ---
        journalInput.value = ""; // Clears the textarea
        
        // --- YOUR REQUEST: Tell user where it's stored + Time stamp ---
        statusText.innerHTML = "Saved on your local device. <br><span style='color: green; font-weight:bold;'>Timestamp:</span> " + detailedTime;
        
        // Optional: change button color briefly
        const saveBtn = document.getElementById('save-btn');
        const originalText = saveBtn.innerText;
        saveBtn.innerText = "Entry Locked!";
        saveBtn.style.background = "#2ecc71"; // Success Green
        
        setTimeout(() => {
            saveBtn.innerText = originalText;
            saveBtn.style.background = "#000000"; // Back to black
        }, 3000);
    }
}

// 3. Affirmation Logic (Updated list)
function newAffirmation() {
    const affirmations = [
        "You are beautiful, powerful, and capable.",
        "Your voice matters.",
        "You deserve success and happiness.",
        "Your uniqueness is your strength.",
        "Be beautiful, as you are."
    ];
    
    const display = document.getElementById('affirmation-display');
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    display.innerText = `"${random}"`;
}

// Run functions on load
window.onload = function() {
    updateTime();
    // Optional: Pre-load the last saved journal entry if you want them to see it.
    // Right now, we are hiding it for privacy since you want it to disappear on save.
    // const lastEntry = localStorage.getItem('lastBayaJournalEntry');
    // if(lastEntry){ document.getElementById('journal').placeholder = "Last Entry: " + lastEntry; }
};
