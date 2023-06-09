// # Øvelse 14

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `startDate` `ectsPoints`.
// 3. Lav en funktion, der sorterer listen af `courses` stigende efter `startDate`. Vis sorteringen på websiden.
import { courses } from "./courses.js";

"use strict";

window.addEventListener("load", start);

function start() {
    console.log(courses);
    sortByDate();
    showCourses(courses);
}

function showCourses(courseList) {
    for(const course of courseList) {
      const courseHtml = /*html*/ `Name: <li>${course.name} - Start date: ${course.startDate} - ECTS: ${course.ectsPoints}</li>`;
      document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
    }
}

function sortByDate() {
    courses.sort((a, b) => a.startDate.localeCompare(b.startDate));
}