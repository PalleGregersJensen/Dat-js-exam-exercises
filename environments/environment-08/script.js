// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.

"use strict";

const songs = [
  { artist: "Mew", title: "Mew-song", duration: "3:21" },
  { artist: "Racing Decays", title: "Drunk all day", duration: "2:46" },
  { artist: "Lukas Graham", title: "Lukas Graham-song", duration: "3:45" },
];

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(songs);
    showSongs(songs);
}

function showSongs(songList) {
  for (const song of songList) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
  }
}