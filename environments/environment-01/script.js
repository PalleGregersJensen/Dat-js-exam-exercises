// # Øvelse 4

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
// 2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
// 3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

window.addEventListener("load", start);

let users = [];

async function start() {
  console.log("JS kører");
  users = await getJsonData();
    console.log(users);
    users.forEach(showUsersOnWebsite);
}

async function getJsonData() {
  const response = await fetch("users.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsersOnWebsite(user) {
    if(user.active === true) {
  const userHtml = /*html*/ `<li>${user.name} - ${user.active}</li>`;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", userHtml);
}
}