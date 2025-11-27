// app.js

// 4 columns x 10 rows = 40 slots
// Order: row 1 left→right, then row 2, etc.
const albums = [
  // Row 1
  {
    title: "Rob Base & D.J. E-Z Rock – It Takes Two",
    spotifyUrl: "https://open.spotify.com/album/..."   // paste your URL
  },
  {
    title: "The Police – Every Breath You Take",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  {
    title: "Cyndi Lauper – She's So Unusual",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  {
    title: "Chicago – Greatest Hits 1982–1989",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  // Row 2
  {
    title: "Dr. Dre – The Chronic",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  {
    title: "Quiet Riot – Metal Health",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  {
    title: "Duran Duran – [Album]",
    spotifyUrl: "https://open.spotify.com/album/..."
  },
  {
    title: "Steve Miller Band – Greatest Hits",
    spotifyUrl: "https://open.spotify.com/album/..."
  },

  // ...continue for all rows until you have 40 entries total...
];

// Render clickable grid cells
function renderRack() {
  const rackEl = document.getElementById("cassette-rack");
  if (!rackEl) return;

  rackEl.innerHTML = "";

  albums.forEach(album => {
    const slot = document.createElement("button");
    slot.className = "cassette-slot";
    slot.type = "button";
    slot.title = album.title;

    slot.addEventListener("click", () => {
      window.open(album.spotifyUrl, "_blank");
    });

    rackEl.appendChild(slot);
  });

  // If you have fewer than 40 entries for now, fill remaining cells
  const totalSlots = 3 * 12;
  for (let i = albums.length; i < totalSlots; i++) {
    const emptySlot = document.createElement("div");
    emptySlot.className = "cassette-slot";
    rackEl.appendChild(emptySlot);
  }
}

document.addEventListener("DOMContentLoaded", renderRack);
