// # Øvelse 9

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.
// 2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
// 3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.

import { teachers } from "./teachers.js";

"use strict";

window.addEventListener("load", start);

function start() {
    console.log(teachers);
    // sortByName(teachers);
    sortByEmail(teachers);
    showTeachers(teachers);
}

function showTeachers(teachersList) {
  for (const teacher of teachersList) {
    const teacherHtml = /*html*/ `<li>Name: ${teacher.name} - Email: ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", teacherHtml);
  }
}

function sortByName() {
    teachers.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByEmail() {
  teachers.sort((a, b) => a.email.localeCompare(b.email));
}