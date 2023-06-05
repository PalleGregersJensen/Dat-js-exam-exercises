// # Øvelse 10

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.
// 3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden.

import { teachers } from "./teachers.js"

"use strict";

window.addEventListener("load", start);

function start() {
    console.log("js kører");
    console.log(teachers);
    addTeacherObjectToArray("Torben", "not@realemail.dk");
    teachers.forEach(showTeachersOnWebsite);
}

function showTeachersOnWebsite(teacher) {
    const teacherHtml = /*html*/ `<li>${teacher.name} - ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", teacherHtml);
}

function addTeacherObjectToArray(name, email) {
    const newTeacher = teacherObject(name, email);
    console.log(newTeacher);
    teachers.push(newTeacher);
    console.log(teachers);
}

function teacherObject(name, email) {
    const teacher = {
        name: name,
        email: email,
    }
    return teacher;
}