// # Øvelse 7

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

const products = [
  { name: "beer", price: 20, inStock: true },
  { name: "flower", price: 10, inStock: true },
  { name: "apples", price: 25, inStock: false },
];

console.log(products);

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  showProducts(products);
  document.querySelector("#create-form").addEventListener("submit", addNewObjectToproductsArray);
}

function showProducts(productList) {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of productList) {
    const productsHtml = /*html*/ `<p>${product.name} - ${product.price} - ${product.inStock}</p>`;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", productsHtml);
  }
}

function sortBytrue(products) {
  products.sort(function (a, b) {
    return b.inStock - a.inStock;
  });
}

function addNewObjectToproductsArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements["product-name"].value;
  let price = form.elements["product-price"].value;
  const stock = form.elements.stock.checked;
  console.log(name);
  console.log(price);
  console.log(stock);
  price = Number(price);
  const newObject = createNewObject(name, price, stock);
  products.push(newObject);
  console.log(products);
  form.reset();
  const sortedList = sortBytrue(products);
  showProducts(products);
}

function createNewObject(name, price, stock) {
  const object = {
    name: name,
    price: price,
    inStock: stock,
  };
  return object;
}
