// # Øvelse 8

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter på websiden.
// 3. Lav en funktion der kan sortere listen efter `name`, `price` og `inStock`. Sorteringen skal ske på baggrund af valgte `option` i `select` (se `environment-03`). Sortering ændrer sig hver gang en ny sortering `option` vælges.

"use strict";

const products = [
  { name: "flouer", price: 20, inStock: true },
  { name: "sugar", price: 15, inStock: false },
  { name: "flowers", price: 25, inStock: true },
];

console.log(products);

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#select-sort-by option").addEventListener("change", handleSortBy);
  showProducts(products);
}

function showProducts(productList) {
  for (const product of productList) {
    const productHtml = /*html*/ `<P>${product.name} - ${product.price} - ${product.inStock}</P>`;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHtml);
  }
}

function handleSortBy() {
  const selectElement = document.querySelector("#select-sort-by");
  const selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption === "name") {
    sortByName();
  } else if (selectedOption === "price") {
    sortByPrice();
  } else if (selectedOption === "inStock") {
    sortByStock();
  }
}

function sortByName() {
  console.log("Name selected");
}

function sortByPrice() {
  console.log("Price selected");
}

function sortByStock() {
  console.log("Stock selected");
}
