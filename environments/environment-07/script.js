// # Øvelse 20

// Environment: `environment-07`

// *Prøveeksamen #2*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
// 2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
// 3. Sortér listen efter `age` så de yngste vises først.

"use strict";

let students = [];

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(students);
    document.querySelector("#create-student-form").addEventListener("submit", createStudentObject);
}

function createStudentObject(event) {
    event.preventDefault();
    console.log("button clicked");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const newStudent = studentObject(name, email, age);
    console.log(newStudent);
    students.push(newStudent);
    console.log(students);
    sortByAge(students);
    showStudents(students);
    form.reset();

}

function studentObject(name, email, age) {
    const student = {
        name: name,
        email: email,
        age: age,
    }
    return student;
}

function showStudents(studentList) {
    document.querySelector("#students-table-body").innerHTML="";
  for (const student of studentList) {
    const studentHtml = /*html*/ `<th>${student.name}</th>  <th>${student.email}</th>  <th>${student.age}</th>`;
    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", studentHtml);
  }
}

function sortByAge(studentList) {
    students.sort((a,b) => a.age - b.age)
}