// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.

"use strict";

let songList = [
  { artist: "Drake", title: "Whatever", duration: "3:21", count: 0 },
  { artist: "Cypress Hill", title: "How I could just kill a man", duration: "3:25", count: 0 },
  { artist: "The streets", title: "Blinded by the light", duration: "5:46", count: 0 },
];

window.addEventListener("load", start);

function start() {
  console.log("Js kører");
  showSongs(songList);
}

function showSongs(songs) {
  const songListElement = document.querySelector("#songlist");
  songListElement.innerHTML = ""; // Ryd tidligere indhold i #songlist

  for (const song of songs) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button></li>`;
    songListElement.insertAdjacentHTML("beforeend", songHtml);
  }

  const upvoteButtons = document.querySelectorAll("#songlist li button");
  for (const button of upvoteButtons) {
    button.addEventListener("click", upvoteSong);
  }
}

function upvoteSong(event) {
  const button = event.target;
  console.log(button);
  const liElement = button.parentElement;
  console.log(liElement);
  const songIndex = Array.from(liElement.parentElement.children).indexOf(liElement);
  console.log(songIndex);
  const song = songList[songIndex];
  console.log(song);

  song.count++;
  sortByCount(songList);
  showSongs(songList);
}

function sortByCount(songs) {
  songs.sort((a, b) => b.count - a.count);
}

