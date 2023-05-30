// # Øvelse 1

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
// 3. Filtrér listen så den kun viser admin-brugere.

"use strict";

window.addEventListener("load", start);

let users = [];

async function start() {
  console.log("JS kører");
  users = await getJsonFile();
  console.log(users);
  users.forEach(showUsers);
}

async function getJsonFile() {
  const response = await fetch("users.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsers(user) {
  const usersHtml = /*html*/ `<li>${user.name} - ${user.active}</li>`;
  document.querySelector("#user-count").insertAdjacentHTML("beforeend", usersHtml);

  const admins = users.filter(filterAdmins);
  console.log(admins);
}

function filterAdmins(user) {
  if (user.role === "admin") {
    return true;
  }
}
