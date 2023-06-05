// # Øvelse 13

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.
import {courses} from "./courses.js"

"use strict";

window.addEventListener("load", start);

function start() {
    console.log(courses);
    showCourses(courses);
}

function showCourses(courseList) {
  for (const course of courseList) {
    const courseHtml = /*html*/ `<li>${course.name} - ${course.ectsPoints}</li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
  }
}

function filterByEcts() {
    const selectFive = document.querySelector("#selct-filter-ects option: value['5']");
    const selectTen = document.querySelector("#selct-filter-ects option: value['10']");
    const selectFifteen = document.querySelector("#selct-filter-ects option: value['15']");
    const selecttwenty = document.querySelector("#selct-filter-ects option: value['20']");
    if (selectFive) {
        
    }
    
}