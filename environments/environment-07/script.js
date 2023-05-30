"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
  console.log("JS kører");
  document.querySelector("#create-student-form").addEventListener("submit", submitButtonClicked);
}

function submitButtonClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value; // Tilføj ".value" for at få værdien af input-feltet
  const age = form.age.value; // Tilføj ".value" for at få værdien af input-feltet
  const email = form.email.value; // Tilføj ".value" for at få værdien af input-feltet
  createStudentObject(name, age, email);
  form.reset(); // Nulstil formular efter indsendelse
}

function createStudentObject(name, age, email) {
  const newStudent = { name, age, email }; // Opret et nyt objekt med de angivne egenskaber
  students.push(newStudent);
  console.log(students);
}
