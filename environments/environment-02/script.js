// # Øvelse 3

// Environment: `environment-02`

// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

"use strict";

window.addEventListener("load", start);

let animals = [];

function start() {
  console.log("JS kører");
  document.querySelector("#create-form").addEventListener("submit", addAnimalToList);
  console.log(animals);
}

function addAnimalToList(event) {
  event.preventDefault();
  console.log("Læses dette?");
  const form = event.target;
  const name = document.querySelector("#animal-name").value;
  const age = document.querySelector("#animal-age").value;
  const type = document.querySelector("#animal-type").value;
  const animalObject = createAnimalObject(name, type, age);
  console.log(animalObject);
  animals.push(animalObject);
  console.log(animals);
  form.reset();
  animals.sort(sortByName);
  console.log(animals);
  showAnimalsOnWebsite(animals);
  console.log(animals);
}

function createAnimalObject(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  return animal;
}

function showAnimalsOnWebsite(animalObject) {
  const listContainer = document.querySelector("table");
  listContainer.innerHTML = ""; // Slet det eksisterende indhold

  for (const animal of animals) {
    const animalHtml =
      /*html*/
      `<tr>
      <td>${animal.name}</td>
      <td>${animal.type}</td>
      <td>${animal.age}</td>
    </tr>`;

    listContainer.insertAdjacentHTML("beforeend", animalHtml); // Indsæt det senest tilføjede objekt
  }
}
function sortByName(animal1, animal2) {
  const animalName1 = animal1.name.toLowerCase();
  const animalName2 = animal2.name.toLowerCase();
  return animalName1.localeCompare(animalName2);
}
