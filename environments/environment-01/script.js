// # Øvelse 2

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden.
// 3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

"use strict";

let users = [];
let adminCount = 0;
let guestCount = 0;
let userCount = 0;

window.addEventListener("load", start);

async function start() {
    console.log("Js kører");
    users = await getJsonData();
    console.log(users);
    showUsers(users);
    showuserCount(users);
}

async function getJsonData() {
    const response = await fetch("users.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showUsers(userList) {
    for (const user of userList) {
      const userHtml = /*html*/ `<li>Name: ${user.name} - Role: ${user.role} - Active: ${user.active}</li>`;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", userHtml);
    }
}

function showuserCount(userList) {
  for (const user of userList) {
    if (user.role === "admin") {
        adminCount++;
        console.log(adminCount);
        document.querySelector("#admin-count").textContent = adminCount;
    } else if (user.role === "guest") {
        guestCount++;
        console.log(guestCount);
        document.querySelector("#guest-count").textContent = guestCount;
    } else if (user.role === "user") {
        userCount++;
        console.log(userCount);
        document.querySelector("#user-count").textContent = userCount;
    }
  }
}