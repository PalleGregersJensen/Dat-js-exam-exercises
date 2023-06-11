// # Øvelse 22

// Environment: `environment-08`

// *Prøveeksamen #4 (sæt 2)*

// 1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.
// 2. Lav en funktion til at udskrive listen af sange på websiden- tilføj en `remove`-knap til hver sang.
// 3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.

"use strict";

let playlist = [];

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  playlist = await getJsonData();
  console.log(playlist);
  showPlaylist(playlist);
}

async function getJsonData() {
  const response = await fetch("playlist.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showPlaylist(songList) {
    document.querySelector("#songlist").innerHTML = "";
  for (const song of songList) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} <button>Remove</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
  }

  const removeButtons = document.querySelectorAll("#songlist li button");
  for (const button of removeButtons) {
    button.addEventListener("click", GoToRemoveSong);
  }
}

function GoToRemoveSong(event) {
  const liElement = event.target.parentElement;
  const songIndex = Array.from(liElement.parentElement.children).indexOf(liElement);
  const songToRemove = playlist[songIndex];
  removeSong(songToRemove);
}

function removeSong(song) {
  console.log("remove song");
  const index = playlist.indexOf(song);
  if (index !== -1) {
    playlist.splice(index, 1);
      showPlaylist(playlist);
      console.log(playlist);
  }
}
