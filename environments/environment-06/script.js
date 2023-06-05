// # Øvelse 15

// Environment: `environment-06`

// *NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

// 1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
// 2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
// 3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

"use strict";

let products = [];
let basket = [];

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  products = await getJsonData();
  console.log(products);
  showProductsOnWebsite(products);
  addToBasket("beer", 100, 100);
    document.querySelector("button").addEventListener("click", addToBasket);
    showProductsInBasket(basket);
    console.log(basket);
    
}

async function getJsonData() {
  const response = await fetch("products.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showProductsOnWebsite(productList) {
  for (const product of productList) {
    const productsHtml =
      /*html*/
      `
    <p>${product.name}</p> 
    <p>${product.weight}</p>  
    <p>${product.price}</p>`;
    document.querySelector("#products").insertAdjacentHTML("beforeend", productsHtml);
  }
}

function addToBasket(name, price, weight) {
  console.log("Button clicked");
  const newItem = newObjectToBasket(name, price, weight);
  basket.push(newItem);
  console.log(basket);
}

function newObjectToBasket(name, price, weight) {
  const item = {
    name: name,
    price: price,
    weight: weight,
  };
  return item;
}

function showProductsInBasket(productList) {
  for (const product of productList) {
    const productInBasketHtml =
      /*html*/
      `<p>${product.name}</p>
        <p>${product.weight}</p>
        <p>${product.price}</p>
    `;
    document.querySelector("#basket").insertAdjacentHTML("beforeend", productInBasketHtml);
  }
}
