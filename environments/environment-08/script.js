"use strict";

window.addEventListener("load", start);

let jsonData = [];

async function start() {
  console.log("JS kører");
  jsonData = await getJsonFile();
    console.log(jsonData);
    jsonData.forEach(showSongsOnWebside);
    
}

async function getJsonFile() {
  const response = await fetch("playlist.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showSongsOnWebside(song) {
    const songsHtml = /*html*/ `<li>${song.title} <button>Remove</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songsHtml);
    document.querySelector("#songlist li:last-child button").addEventListener("click", removeSongFromList);
}

function removeSongFromList() {
    console.log("Button clciked"); 
}

// Kan laves med filter. Tænk omvendt. Dem, der er markeret, skal slettes.