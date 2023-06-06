// # Øvelse 21

// Environment: `environment-07`

// *Prøveeksamen #3*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
// 2. Lav en anden funktion til at vise listen på websiden, men undlad eventuelle students der er under 18 år.
// 3. Sortér listen alfabetisk efter `name`.

"use strict";

let students = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(students);
  document.querySelector("#create-student-form").addEventListener("submit", addStudentToArray);
}

function addStudentToArray(event) {
  event.preventDefault();
  console.log("button clicked");
  const form = event.target;
  const name = form.name.value;
  console.log(name);
  const email = form.email.value;
  console.log(email);
  const age = form.age.value;
  const newStudent = createStudentObject(name, email, age);
  console.log(newStudent);
  students.push(newStudent);
  sortByAge(students);
    showStudents(students);
    form.reset();
}

function createStudentObject(name, email, age) {
  const student = {
    name: name,
    email: email,
    age: age,
  };
  return student;
}

function showStudents(studentList) {
  document.querySelector("#students-table-body").innerHTML = "";
  for (const student of studentList) {
    if (student.age >= 18) {
      const studentHtml = /*html*/ `<th>${student.name}</th> <th>${student.email}</th> <th>${student.age}</th>`;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", studentHtml);
    } else {
    }
  }
}

function sortByAge(studentList) {
  students.sort((a, b) => a.name.localeCompare(b.name));
}
