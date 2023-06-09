// # Øvelse 12

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
// 3. Lav en funktion, der sorterer listen af `courses` efter stigende antal ECTS. Vis den sorterde liste på websiden.
import { courses } from "./courses.js";

"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(courses);
    sortByEcts();
    showCourses(courses);
}

function showCourses(courseList) {
  for (const course of courseList) {
    const courseHtml = /*html*/ `<li>Name: ${course.name} - ECTS: ${course.ectsPoints}</li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
  }
}

function sortByEcts() {
    courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}