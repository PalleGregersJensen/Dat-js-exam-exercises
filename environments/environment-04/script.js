// # Øvelse 10

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.
// 3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden.
import {teachers} from "./teachers.js"

"use strict";

window.addEventListener("load", start);

function start() {
    console.log(teachers);
    showTeachers(teachers);
    addNewTeacherObjectToArray("Torben", "torben@mail.dk")
}

function showTeachers(teachersList) {
    document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachersList) {
    const teacherHtml = /*html*/ `<li>${teacher.name} - ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", teacherHtml);
  }
}

function addNewTeacherObjectToArray(name, email) {
    const newTeacher = createTeacherObject(name, email);
    teachers.push(newTeacher);
    console.log(teachers);
    showTeachers(teachers);
}

function createTeacherObject(name, email) {
    const teacher = {
        name: name,
        email: email,
    }
    return teacher;
}