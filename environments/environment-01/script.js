// # Øvelse 1

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
// 3. Filtrér listen så den kun viser admin-brugere.

"use strict";

let users = [];

window.addEventListener("load", start);

async function start() {
  console.log("js kører");
  users = await getJsonData();
  console.log(users);
  const filteredUsers = filterByAdmin(users);
  showUsers(filteredUsers);
}

async function getJsonData() {
  const response = await fetch("users.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsers(userList) {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of userList) {
    const userHtml = /*html*/ `<li>Name: ${user.name} - Active: ${user.active}</li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", userHtml);
  }
}

function filterByAdmin(users) {
  const adminUsers = users.filter(checkAdmin);
    console.log(adminUsers);
    return adminUsers;
}
function checkAdmin(user) {
  if (user.role === "admin") {
    console.log(users);
    return true;
  }
}
