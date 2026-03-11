// --- 1. DATE & TIME ---
function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const dateEl = document.getElementById('current-date');
    const timeEl = document.getElementById('current-time');
    
    if(dateEl) dateEl.innerText = now.toLocaleDateString('en-US', dateOptions);
    if(timeEl) timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// --- 2. AFFIRMATIONS ---
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
    if(display) display.innerText = `"${affirmations[randomIndex]}"`;
}

// --- 3. JOURNAL & SHARING ---
async function saveAndShare() {
    const journalInput = document.getElementById('journal');
    const lastLogText = document.getElementById('last-log-text');
    const entry = journalInput.value.trim();

    if (entry === "") {
        alert("Please write something first!");
        return;
    }

    const now = new Date();
    const timestamp = now.toLocaleTimeString() + ' on ' + now.toLocaleDateString();
    const fullEntry = `Baya Journal Entry (${timestamp}):\n\n${entry}`;
    
    // Save to local memory
    localStorage.setItem('lastBayaJournalEntry', fullEntry);
    if(lastLogText) lastLogText.innerText = fullEntry;
    
    // Clear the box
    journalInput.value = "";

    // Trigger Mobile Share Menu
    if (navigator.share) {
        try {
            await navigator.share({ title: 'Baya Journal', text: fullEntry });
        } catch (err) { console.log("Share cancelled"); }
    } else {
        alert("Entry saved to your log below!");
    }
}