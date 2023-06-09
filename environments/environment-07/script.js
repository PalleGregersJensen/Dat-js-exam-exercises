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
    document.querySelector("#create-student-form").addEventListener("submit", addStudentObjectToArray);
}

function addStudentObjectToArray(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const newStudent = createStudentObject(name, email, age);
    students.push(newStudent);
    console.log(students);

}

function createStudentObject(name, email, age) {
    const student = {
        name: name,
        email: email,
        age: age,
    }
    return student;
}

function checkEmail() {
    
}