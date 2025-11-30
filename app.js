// js/app.js

// Central place to define your version:
const CASSETTE_RACK_VERSION = "Version 2.0.0";

// Run code after HTML is parsed (since we used `defer`, DOMContentLoaded is safe but optional)
document.addEventListener("DOMContentLoaded", () => {
  // Set the version label in the footer
  const versionSpan = document.getElementById("version-label");
  if (versionSpan) {
    versionSpan.textContent = CASSETTE_RACK_VERSION;
  }

  // Example: access all cassette slots (we’ll use this later for Spotify links)
  const cassetteSlots = document.querySelectorAll(".cassette-slot");

  cassetteSlots.forEach((slot) => {
    slot.addEventListener("click", (event) => {
      // For now, prevent navigation and just log which slot was clicked
      event.preventDefault();
      const slotNumber = slot.dataset.slot;
      console.log(`Cassette slot ${slotNumber} clicked.`);
    });
  });
});
