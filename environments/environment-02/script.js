// # Øvelse 5

// Environment: `environment-02`

// 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
// 2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

window.addEventListener("load", start);

let animalList = [
  { name: "Torben", type: "Pig", age: 23 },
  { name: "Matt", type: "Cat", age: 88 },
  { name: "Errin", type: "Bird", age: 3 },
];

function start() {
  console.log("JS kører");
  console.log(animalList);
  const sortedAnimals = sortByAge();
  showAnimalsAtWebsite(sortedAnimals);
  document.querySelector("#create-form").addEventListener("submit", addAnimalToArray);
}

function showAnimalsAtWebsite(animals) {
  document.querySelector("table").innerHTML = "";
  for (const animal of animals) {
    const animalHtml =
      /*html*/
      `<tr>
                        <th>${animal.name}</th>
                        <th>${animal.type}</th>
                        <th>${animal.age}</th>
                    </tr>`;
    document.querySelector("table").insertAdjacentHTML("beforeend", animalHtml);
  }
}

function sortByAge() {
  // Brug Array.sort() til at sortere efter alder
  const sortedAnimals = animalList.sort((a, b) => a.age - b.age);
  return sortedAnimals;
}

function addAnimalToArray(event) {
  event.preventDefault();
  console.log("button clicked");
  const form = event.target;
  const name = document.querySelector("#animal-name").value;
  const type = document.querySelector("#animal-type").value;
  const age = document.querySelector("#animal-age").value;
  const animalObject = returnAnimalObject(name, type, age);
  animalList.push(animalObject);
  showAnimalsAtWebsite(animalList);
}

function returnAnimalObject(name, type, age) {
const newAnimal = {
  name: name,
  type: type,
  age: age,
  };
  return newAnimal;
}
