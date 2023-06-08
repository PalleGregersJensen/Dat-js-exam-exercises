// # Øvelse 6

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

const products = [
  { name: "beer", price: 25, inStock: true },
  { name: "flowers", price: 45, inStock: false },
  { name: "onions", price: 15, inStock: true },
];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(products);
    showProducts(products);
    document.querySelector("#create-form").addEventListener("submit", addProductObjectToArray);
}

function showProducts(productList) {
    document.querySelector("#list-container").innerHTML = "";
  for (const product of productList) {
    if (product.inStock === true) {
      const productHtml = /*html*/ `<p>Name: ${product.name} - Price: ${product.price} - In stock: ${product.inStock}</p>`;
      document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHtml);
    }
  }
}

function addProductObjectToArray(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["product-name"].value;
    const price = Number(form.elements["product-price"].value);
    const inStock = form.elements["stock"].checked;
    const newProduct = createNewproduct(name, price, inStock);
    form.reset();
    products.push(newProduct);
    console.log(products);
    showProducts(products);
}

function createNewproduct(name,price, inStock) {
    const product = {
        name: name,
        price: price,
        inStock: inStock,
    }
    return product;
}