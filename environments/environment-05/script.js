// # Øvelse 13

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.
import { courses } from "./courses.js";

("use strict");

window.addEventListener("load", start);

function start() {
  console.log(courses);
  showCourses(courses);
  document.querySelector("#select-filter-ects").addEventListener("change", filterByEcts);
}

function showCourses(courseList) {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courseList) {
    const courseHtml =
      /*html*/
      `     <li>
        Name: ${course.name} - ECTS: ${course.ectsPoints}
      </li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
  }
}

function filterByEcts(courseList) {
  console.log("change");
  const ectsFilter = Number(document.querySelector("#select-filter-ects").value);
  console.log(ectsFilter);
  if (ectsFilter === 5) {
    const fiveEcts = courses.filter(checkEctsFive);
    console.log(fiveEcts);
    showCourses(fiveEcts);
  } else if (ectsFilter === 10) {
    const tenEcts = courses.filter(checkEctsTen);
    console.log(tenEcts);
    showCourses(tenEcts);
  } else if (ectsFilter === 15) {
    const fifteenEcts = courses.filter(checkEctsFifteen);
    console.log(fifteenEcts);
    showCourses(fifteenEcts);
  } else if (ectsFilter === 20) {
    const twentyEcts = courses.filter(checkEctsTwenty);
    console.log(twentyEcts);
    showCourses(twentyEcts);
  }
}

function checkEctsFive() {
  courses.ectsPoints = 5;
  console.log(courses);
  return courses;
}

function checkEctsTen() {
  courses.ectsPoints = 10;
  console.log(courses);
  return courses;
}

function checkEctsFifteen() {
  courses.ectsPoints = 15;
  console.log(courses);
  return courses;
}

function checkEctsTwenty() {
  courses.ectsPoints = 20;
  console.log(courses);
  return courses;
}
