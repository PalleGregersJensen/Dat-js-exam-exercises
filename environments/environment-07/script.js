// # Øvelse 21

// Environment: `environment-07`

// *Prøveeksamen #3*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
// 2. Lav en anden funktion til at vise listen på websiden, men undlad eventuelle students der er under 18 år.
// 3. Sortér listen alfabetisk efter `name`.

"use strict";

const students = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#create-student-form").addEventListener("submit", addNewStudentObjectToArray);
}

function addNewStudentObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);
  const newStudent = crateStudentObject(name, email, age);
  console.log(newStudent);
  students.push(newStudent);
  console.log(students);
  form.reset();
  sortByName();
  showStudents(students);
}

function crateStudentObject(name, email, age) {
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
      const studentHtml =
        /*html*/
        `<tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>`;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", studentHtml);
    }
  }
}

function sortByName() {
  students.sort((a, b) => a.name.localeCompare(b.name));
}
