// # Øvelse 20

// Environment: `environment-07`

// *Prøveeksamen #2*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
// 2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
// 3. Sortér listen efter `age` så de yngste vises først.

"use strict";

const students = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#create-student-form").addEventListener("submit", addStudentObjectToArray);
}

function addStudentObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);
  const newStudent = createStudent(name, email, age);
  console.log(newStudent);
  students.push(newStudent);
    console.log(students);
    sortByAge();
    showStudents(students);
}

function createStudent(name, email, age) {
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

function sortByAge() {
    students.sort((a,b) => a.age - b.age)
}