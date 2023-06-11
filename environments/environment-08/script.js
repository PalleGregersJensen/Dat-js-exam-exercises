// # Øvelse 24

// Environment: `environment-08`

// *Prøveeksamen #6 (sæt 2)*

// 1. Lav en liste over sange, og lav en funktion til at tilføje et sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.
// 2. Lav en funktion til at udskrive listen af sange på websiden.
// 3. Sortér listen alfabetisk efter `artist` eller `title` alt efter hvad der bliver valgt på websiden.

"use strict";

const songs = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#add-song-form").addEventListener("submit", addNewSongObjectToArray);
  document.querySelector("#sort-songs-form").addEventListener("change", handleBySort);
}

function addNewSongObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  const newSong = createSong(artist, title, duration);
  songs.push(newSong);
  console.log(newSong);
  console.log(songs);
//   sortByArtist();
//   sortByTitle();
  showSongs(songs);
  form.reset();
}

function createSong(artist, title, duration) {
  const song = {
    artist: artist,
    title: title,
    duration: duration,
  };
  return song;
}

function showSongs(songList) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songList) {
    const songHtml = /*html*/ `<li>${song.artist} - ${song.title} - ${song.duration}</li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHtml);
  }
  console.log("vises dette?");
}

function handleBySort() {
  console.log("læses dette?");
  const artist = document.querySelector("#sort-artist").value;
  const title = document.querySelector("#sort-title").value;
  console.log(artist.value);
  console.log(title.value);
  if (artist) {
    sortByArtist();
  } else if (title) {
    sortByTitle();
  }
}

function sortByArtist() {
  console.log("læses dette?");
  songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   showSongs(songs);
}

function sortByTitle() {
  console.log("læses dette?");
  songs.sort((a, b) => a.title.localeCompare(b.title));
//   showSongs(songs);
}
