"use strict";

const listOfSongs = [];

window.addEventListener("load", start);

function start() {
    console.log("js kører");
    console.log(listOfSongs);
    document.querySelector("button").addEventListener("click", addSongToList);
}

function addSongToList(event) {
    console.log("button clicked");
    event.preventDefault();
    const form = event.target;
    const artist = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value; 
    const newSong = songAddedInForm(artist, title, duration);
    console.log(newSong);
    listOfSongs.push(newSong);
    console.log()
}

function songAddedInForm(artist, title, duration) {
    const songObject = {
      artist, title, duration
    }
    return songObject;
}
