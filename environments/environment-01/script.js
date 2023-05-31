// # Øvelse 2

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden.
// 3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

"use strict";

window.addEventListener("load", start);

let users = [];
let userCount = 0;
let adminCount = 0;
let guestCount = 0;

async function start() {
  console.log("JS kører");
  users = await getJsonData();
  console.log(users);
  // users.forEach(showUsersOnWebsite);
    showUsersOnWebsite();
    countUsers();
    countAdmins();
    countGuets();
}

async function getJsonData() {
  const response = await fetch("users.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsersOnWebsite(user) {
  for (const user of users) {
    const usersHtml = /*html*/ `<li>${user.name} - ${user.active} - ${user.role}</li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", usersHtml);
  }
}

function countUsers(user) {
    console.log("kaldes denne funktion?")
    for (const user of users) {
        if (user.role === "user") {
            userCount++;
            console.log(userCount);
        }
        console.log(userCount);
        return userCount;
    }
}
function countAdmins(user) {
    console.log("kaldes denne funktion?")
    for (const user of users) {
        if (user.role === "admin") {
            adminCount++;
            console.log(adminCount);
        }
    }
}

function countGuets(user) {
    console.log("kaldes denne funktion?")
    for (const user of users) {
        if (user.role === "guest") {
            guestCount++;
            console.log(guestCount);
        }
    }
}