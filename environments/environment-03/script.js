// # Øvelse 8

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter på websiden.
// 3. Lav en funktion der kan sortere listen efter `name`, `price` og `inStock`. Sorteringen skal ske på baggrund af valgte `option` i `select` (se `environment-03`). Sortering ændrer sig hver gang en ny sortering `option` vælges.

"use strict";

const products = [
  { name: "beer", price: 25, inStock: true },
  { name: "whisky", price: 125, inStock: false },
  { name: "apples", price: 10, inStock: true },
];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
    console.log(products);
    showProducts(products);
    document.querySelector("#select-sort-by").addEventListener("change", handleSortBy);
}   


function showProducts(productList) {
    document.querySelector("#list-container").innerHTML = "";
  for (const product of productList) {
    const productHtml = /*html*/ `<p>${product.name} - ${product.price} - ${product.inStock}</p>`;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHtml);
  }
}


function handleSortBy() {
    console.log("change");
    const sortBy = document.querySelector("#select-sort-by").value;
    console.log(sortBy);
    if (sortBy === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "inStock") {
        products.sort((a, b) => b.inStock - a.inStock);
    }
    showProducts(products);
}