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
  // const name = form.animal-name.value;
  // console.log(name);
  // const age = form.animal-age.value;
  // const type = form.animal-type.value;
  const name = document.querySelector("#animal-name").value;
  const age = document.querySelector("#animal-age").value;
  const type = document.querySelector("#animal-type").value;
  const animalObject = createAnimalObject(name, type, age);
  console.log(animalObject);
  animals.push(animalObject);
  animals.pop;
  console.log(animals);
  form.reset();
  //  showAnimalsOnWebsite(animals);

  const animalsHtml =
    /*html*/
    `               <tr>
                        <td>${animalObject.name}</td>
                        <td>${animalObject.type}</td>
                        <td>${animalObject.age}</td>
                    </tr>`;
  document.querySelector("table").insertAdjacentHTML("beforeend", animalsHtml);
}

function createAnimalObject(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  return animal;
}

// function showAnimalsOnWebsite(animalObject) {
// document.querySelector("#list-container").innerHTML = "";
//   const animalsHtml =
/*html*/
//     `               <tr>
//                         <td>${animalObject.name}</td>
//                         <td>${animalObject.type}</td>
//                         <td>${animalObject.age}</td>
//                     </tr>`;
//   document.querySelector("#list-container").insertAdjacentHTML("beforeend", animalsHtml);
// }
