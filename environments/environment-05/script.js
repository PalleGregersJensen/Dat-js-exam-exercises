// # Øvelse 11

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
// 3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.
import {courses} from "./courses.js"

"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(courses);
    showCourses(courses);
    addNewCourseToArray("Whatever", 25, "Torben");
}

function showCourses(courseList) {
    document.querySelector("#courses-list").innerHTML = "";
    for (const course of courseList) {
    const courseHtml = /*html*/ `<li>Name: ${course.name} - ECTS: ${course.ectsPoints} - Teacher: ${course.teacher}</li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
}
}

function addNewCourseToArray(name, ectsPoints, teacher) {
    const newCourse = createCourse(name, ectsPoints, teacher);
    courses.push(newCourse);
    console.log(courses);
    showCourses(courses);
}

function createCourse(name, ectsPoints, teacher) {
    const course = {
        name: name,
        ectsPoints: ectsPoints,
        teacher: teacher,
    }
    return course;
}