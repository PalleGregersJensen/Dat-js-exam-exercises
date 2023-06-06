// # Øvelse 24

// Environment: `environment-08`

// *Prøveeksamen #6 (sæt 2)*

// 1. Lav en liste over sange, og lav en funktion til at tilføje et sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.
// 2. Lav en funktion til at udskrive listen af sange på websiden.
// 3. Sortér listen alfabetisk efter `artist` eller `title` alt efter hvad der bliver valgt på websiden.

"use strict";

let songList = [];

window.addEventListener("load", start);

function start() {
  console.log("js kører");
  console.log(songList);
  document.querySelector("#add-song-form").addEventListener("submit", addSongToArray);
  document.querySelector("#sort-songs-form").addEventListener("change", handleSortBy);
}

function addSongToArray(event) {
  event.preventDefault();
  console.log("button clciked");
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  let newSong = createNewSong(artist, title, duration);
  console.log(newSong);
  songList.push(newSong);
  console.log(songList);
  showSongs(songList);
  form.reset();
}

function createNewSong(artist, title, duration) {
  const song = {
    artist: artist,
    title: title,
    duration: duration,
  };
  return song;
}

function showSongs(songs) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration}</li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
  }
}

function handleSortBy() {
  console.log("Handle sort by");
  const artistInHtml = document.querySelector("#sort-artist");
  console.log(artistInHtml);
  const titleInHtml = document.querySelector("#sort-title");
  console.log(titleInHtml);
  if (titleInHtml.checked) {
    sortByTitle(songList);
  } else if (artistInHtml.checked) {
    sortByArtist(songList);
  }
}

function sortByArtist(songs) {
  console.log("sort by artist");
  songs.sort((a, b) => a.artist.localeCompare(b.artist));
  showSongs(songList);
}

function sortByTitle(songs) {
  console.log("sort by title");
  songs.sort((a, b) => a.title.localeCompare(b.title));
  showSongs(songList);
}
