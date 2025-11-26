// app.js

// 1. Album data
//    Replace / extend this list with your own albums and playlist links.
const albums = [
  {
    title: "Jolene",
    artist: "Dolly Parton",
    image: "dolly_parton_jolene.png",
    spotifyUrl: "https://open.spotify.com/album/5DyOxuvdSmTSNAmkfcsBsj"
  },
  {
    title: "Girls Girls Girls",
    artist: "Motley Crue",
    image: "motley_girls.png",
    spotifyUrl: "https://open.spotify.com/album/0vPZhR1KpbRNBOQBsDScS8"
  }
  // Add more album objects here
];

// 2. Render function to build the cassette rack
function renderRack() {
  const rackEl = document.getElementById("cassette-rack");
  if (!rackEl) return;

  // Clear if rerendering
  rackEl.innerHTML = "";

  albums.forEach(album => {
    // Outer cassette container
    const cassette = document.createElement("article");
    cassette.className = "cassette";
    cassette.title = `${album.title} – ${album.artist}`;

    // Click behavior: open Spotify link in new tab / app
    cassette.addEventListener("click", () => {
      window.open(album.spotifyUrl, "_blank");
    });

    // Cover image
    const img = document.createElement("img");
    img.className = "cassette-cover";
    img.src = album.image;
    img.alt = `${album.title} cover`;

    // Info area
    const info = document.createElement("div");
    info.className = "cassette-info";

    const titleEl = document.createElement("div");
    titleEl.className = "cassette-title";
    titleEl.textContent = album.title;

    const artistEl = document.createElement("div");
    artistEl.className = "cassette-artist";
    artistEl.textContent = album.artist;

    const spotifyEl = document.createElement("div");
    spotifyEl.className = "cassette-spotify";
    spotifyEl.textContent = "Open in Spotify";

    info.appendChild(titleEl);
    info.appendChild(artistEl);
    info.appendChild(spotifyEl);

    cassette.appendChild(img);
    cassette.appendChild(info);

    rackEl.appendChild(cassette);
  });
}

// 3. Initialize when the page is ready
document.addEventListener("DOMContentLoaded", renderRack);
