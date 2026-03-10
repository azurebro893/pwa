// 1. Update Date and Time immediately
function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    document.getElementById('current-date').innerText = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('current-time').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 2. Affirmations Array
const affirmations = [
    "You are capable of amazing things.",
    "Your voice matters and deserves to be heard.",
    "You are beautiful exactly as you are.",
    "You have the power to create change.",
    "Confidence is your superpower."
];

function newAffirmation() {
    const display = document.getElementById('affirmation-display');
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    display.innerText = `"${affirmations[randomIndex]}"`;
}

// 3. THE JOURNAL FUNCTION (The fix for your button)
async function saveAndShare() {
    const journalInput = document.getElementById('journal');
    const logContainer = document.getElementById('log-container');
    const lastLogText = document.getElementById('last-log-text');
    
    const entry = journalInput.value.trim();

    if (entry === "") {
        alert("Please write something before saving!");
        return;
    }

    const now = new Date();
    const timestamp = now.toLocaleTimeString() + ' on ' + now.toLocaleDateString();
    const fullEntry = `Baya Journal Entry (${timestamp}):\n\n${entry}`;

    // A. Save to Phone Memory (Local Storage)
    localStorage.setItem('lastBayaJournalEntry', fullEntry);
    
    // B. Show the Log on screen
    lastLogText.innerText = fullEntry;
    logContainer.style.display = 'block';
    
    // C. Clear the box
    journalInput.value = "";

    // D. TRIGGER THE IPHONE/ANDROID SHARE MENU
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Baya Journal Entry',
                text: fullEntry
            });
        } catch (err) {
            console.log("Share sheet closed");
        }
    } else {
        alert("Saved to log! (Note: Your browser doesn't support the pop-up share menu, but your text is saved below).");
    }
}