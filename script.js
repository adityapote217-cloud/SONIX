let audio = document.getElementById("audio-player");
let trackList = document.getElementById("track-list");
let currentTrackIndex = 0;
let tracks = [];

function addTracks(event) {
  let files = event.target.files;
  for (let file of files) {
    let li = document.createElement("li");
    li.textContent = file.name;
    li.onclick = () => playTrack(file);
    trackList.appendChild(li);
    tracks.push(file);
  }
}

function playTrack(file) {
  let url = URL.createObjectURL(file);
  audio.src = url;
  audio.play();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextTrack() {
  if (tracks.length > 0) {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(tracks[currentTrackIndex]);
  }
}

function prevTrack() {
  if (tracks.length > 0) {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[currentTrackIndex]);
  }
}

function loadPlaylist(name) {
  trackList.innerHTML = "";
  tracks = []; // reset
  alert("Loading playlist: " + name);
  // You can extend this to load saved playlists from localStorage
}
