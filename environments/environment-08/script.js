// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.

"use strict";

let count = 0;

let songList = [
  { artist: "Drake", title: "Whatever", duration: 3.21, count: 0 },
  { artist: "Cypress Hill", title: "How I could just kill a man", duration: 3.25, count: 0 },
  { artist: "The streets", title: "Blinded by the light", duration: 5.46, count: 0 },
];

window.addEventListener("load", start);

function start() {
    console.log("Js kører");
    console.log(songList);
    showSongs(songList);
}

function showSongs(songs) {
  for (const song of songs) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
  }
}


