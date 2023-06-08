// # Øvelse 5

// Environment: `environment-02`

// 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
// 2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

const animals = [
  { name: "Torben", type: "dog", age: 62 },
  { name: "Merethe", type: "bird", age: 12 },
  { name: "Anders", type: "cow", age: 37 },
];

window.addEventListener("load", start);

function start() {
  console.log(animals);
  sortByAge(animals);
  console.log(animals);
  showAnimals(animals);
  document.querySelector("#create-form").addEventListener("submit", addNewAnimalObjectToArray);
}

function showAnimals(animalList) {
  document.querySelector("tbody").innerHTML = "";
  for (const animal of animalList) {
    const animalHtml = /*html*/ `<tr><th>${animal.name}</th><th>${animal.type}</th><th>${animal.age}</th></tr>`;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", animalHtml);
  }
}

function sortByAge(animals) {
  animals.sort((a, b) => a.age - b.age);
}

function addNewAnimalObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements["animal-name"].value;
  const type = form.elements["animal-type"].value;
  const age = form.elements["animal-age"].value;
  form.reset();
  const newAnimal = createanimalObject(name, type, age);
  animals.push(newAnimal);
  sortByAge(animals);
  console.log(animals);
  showAnimals(animals);
}

function createanimalObject(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  return animal;
}
