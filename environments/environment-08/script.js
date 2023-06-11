// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.

"use strict";

const songs = [
  { artist: "Mew", title: "Mew-song", duration: "3:21", count: 0 },
  { artist: "Racing Decays", title: "Drunk all day", duration: "2:46", count: 0 },
  { artist: "Lukas Graham", title: "Lukas Graham-song", duration: "3:45", count: 0 },
];

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(songs);
    showSongs(songs);
}

function showSongs(songList) {
    document.querySelector("#songlist").innerHTML = "";
  for (const song of songList) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration} <button>Upvote</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
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
  const song = songs[songIndex];
  console.log(song);

  song.count++;
  sortByCount(songs);
  showSongs(songs);
}

function sortByCount(songs) {
  songs.sort((a, b) => b.count - a.count);
}
