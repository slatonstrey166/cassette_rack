// js/app.js

// Central place to define your version:
const CASSETTE_RACK_VERSION = "Version 2.0.0";

document.addEventListener("DOMContentLoaded", () => {
  // Set the version label in the footer
  const versionSpan = document.getElementById("version-label");
  if (versionSpan) {
    versionSpan.textContent = CASSETTE_RACK_VERSION;
  }

  // Get all cassette slots (now 5 × 12 = 60)
  const cassetteSlots = document.querySelectorAll(".cassette-slot");

  cassetteSlots.forEach((slot) => {
    slot.addEventListener("click", (event) => {
      // For now, prevent navigation and just log which slot was clicked
      event.preventDefault();
      const column = slot.dataset.column;
      const row = slot.dataset.row;
      console.log(`Cassette slot column ${column}, row ${row} clicked.`);
    });
  });
});
