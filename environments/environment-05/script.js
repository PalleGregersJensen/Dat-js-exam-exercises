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
  document.querySelector("#select-filter-ects").addEventListener("change", filterByEcts);
  showCourses(courses);
}

function showCourses(courseList) {
    document.querySelector("#courses-list").innerHTML = "";
  for (const course of courseList) {
    const courseHtml = /*html*/ `<li>${course.name} - ${course.ectsPoints}</li>`;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", courseHtml);
  }
}

function filterByEcts() {
  const selectElement = document.querySelector("#select-filter-ects");
  const selectedValue = selectElement.value;
  console.log(selectedValue);

  if (selectedValue === "5") {
    console.log("5 Ects valgt");
    const fiveEcts = courses.filter(filterByFiveEcts);
      console.log(fiveEcts);
      showCourses(fiveEcts);
  } else if (selectedValue === "10") {
    console.log("10 Ects valgt");
    const tenEcts = courses.filter(filterByTenEcts);
      console.log(tenEcts);
      showCourses(tenEcts);
  } else if (selectedValue === "15") {
    console.log("15 Ects valgt");
    const fifteenEcts = courses.filter(filterByFifteenEcts);
      console.log(fifteenEcts);
      showCourses(fifteenEcts);
  } else if (selectedValue === "20") {
    console.log("20 Ects valgt");
    const twentyEcts = courses.filter(filterByTwentyEcts);
      console.log(twentyEcts);
      showCourses(twentyEcts);
    }
}

function filterByFiveEcts(courses) {
  if (courses.ectsPoints === 5) {
    return courses;
  }
}

function filterByTenEcts(courses) {
  if (courses.ectsPoints === 10) {
    return courses;
  }
}

function filterByFifteenEcts(courses) {
  if (courses.ectsPoints === 15) {
    return courses;
  }
}

function filterByTwentyEcts(courses) {
  if (courses.ectsPoints === 20) {
    return courses;
  }
}
