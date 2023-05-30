"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
  console.log("JS kører");
  document.querySelector("#create-student-form").addEventListener("submit", createStudentObject);
}

function createStudentObject(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.name;
  const age = form.age;
  const email = form.email;
  students.push(newStudent);
    console.log(students);
    
}

function handleCreateButton() {}
