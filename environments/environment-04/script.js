// # Øvelse 9

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.
// 2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
// 3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.

"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(teachers);
  // const namesSorted = sortByName(teachers);
  const emailsSorted = sortByEmail(teachers);
  showTeachersOnWebsite();
}

function showTeachersOnWebsite() {
  for (const teacher of teachers) {
    const teacherHtml = /*html*/ `<li>${teacher.name} - ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", teacherHtml);
  }
}

function sortByName(teachers) {
    console.log("sort by name");
    teachers.sort((a,b) => a.name.localeCompare(b.name));
    return teachers;
}

function sortByEmail() {
    console.log("sort by email");
    teachers.sort((a, b) => a.email.localeCompare(b.email))
    return teachers;
}

