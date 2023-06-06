// # Øvelse 19

// Environment: `environment-07`

// *Prøveeksamen #1*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
// 2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk
// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

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
    console.log("button clciked");
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const email = form.email.value;
    const newStudent = returnStudentObject(name, age, email);
    students.push(newStudent);
    console.log(students);
    checkEmail(newStudent);
    console.log(students);
    form.reset();
}

function returnStudentObject(name, age, email) {
    const student = {
        name: name,
        age: age,
        email: email,
    }
    return student;
}

function checkEmail(studentObject) {
    const studentEmail = studentObject.email;
    if (studentEmail.length >= 16 && studentEmail.endsWith("@stud.kea.dk")) {
      console.log("Student suucesfuldt oprettet");
    } else {
        console.log("Oprettelse mislykkedes");
        students.pop();
    }
}