// # Øvelse 3

// Environment: `environment-02`

// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

"use strict";

let animals = [];

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(animals);
    document.querySelector("#create-form").addEventListener("submit", addAnimalObjectToArray);
    // addAnimalObjectToArray("Tom", "Cat", 27);
    // console.log(animals);
}

function addAnimalObjectToArray(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["animal-name"].value;
    const type = form.elements["animal-type"].value;
    const age = form.elements["animal-age"].value;
    const newAnimal = createAnimal(name, type, age);
    animals.push(newAnimal);
    console.log(animals);
    form.reset();
    sortByName(animals);
    showAnimals(animals);
}

function createAnimal(name, type, age) {
    const animal = {
        name: name,
        type: type,
        age: age,
    }
    return animal;
}

function showAnimals() {
    document.querySelector("#list-container tbody").innerHTML = "";
  for (const animal of animals) {
    const animalHtml = /*html*/ `<tr><td>${animal.name}</td> <td>${animal.type}</td> <td>${animal.age}</td></tr>`;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", animalHtml);
  }
}

function sortByName() {
    animals.sort((a, b) => a.name.localeCompare(b.name));
}