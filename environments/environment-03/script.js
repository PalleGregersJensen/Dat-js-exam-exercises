// # Øvelse 6

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";

let products = [
  { name: "beer", price: 20, inStock: true },
  { name: "flower", price: 15, inStock: true },
  { name: "apples", price: 25, inStock: false },
];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(products);
  showProducts(products);
  document.querySelector("#create-form").addEventListener("submit", addProdctToArray);
}

function showProducts(productList) {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of productList)
      if (product.inStock === true) {
      {
        const productHtml = /*html*/ `<p>${product.name}-${product.price}-${product.inStock}</p>`;
        document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHtml);
      }
       }
}

function addProdctToArray() {
  event.preventDefault();
  console.log("button clicked");
  const form = event.target;
  const name = form.elements["product-name"].value;
  let price = document.querySelector("#product-price").value;
  let stock = document.querySelector("#stock").checked;
  price = Number(price);
  stock = Boolean(stock);
  console.log(name);
  console.log(price);
  console.log(stock);
  const newProduct = returnObject(name, price, stock);
  console.log(newProduct);
  products.push(newProduct);
  console.log(products);
  showProducts(products);
  form.reset();
}

function returnObject(name, price, stock) {
  const product = {
    name: name,
    price: price,
    inStock: stock,
  };
  return product;
}

