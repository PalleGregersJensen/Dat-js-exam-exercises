// # Øvelse 11

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
// 3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.
import { courses } from "./courses.js";

"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(courses);
    addCourseObjectToArray("Hello world", 25, "Torben");
    showCourses(courses);
}

function showCourses(courseList) {
  for (const course of courseList) {
    const courseHtml = /*html*/ `<li>${course.name} - ${course.ectsPoints} - ${course.teacher}</li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
  }
}

function addCourseObjectToArray(name, ectsPoints, teacher) {
    console.log("New course-element");
    const newCourse = courseObject(name, ectsPoints, teacher)
    courses.push(newCourse);
}

function courseObject(name, ectsPoints, teacher) {
    const course = {
        name: name,
        ectsPoints: ectsPoints,
        teacher: teacher,
    };
    return course;
}