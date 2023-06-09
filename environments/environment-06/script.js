// # Øvelse 15

// Environment: `environment-06`

// *NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

// 1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
// 2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
// 3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

"use strict";

let products = [];

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  products = await getJsonData();
    console.log(products);
    showProducts(products);
}

async function getJsonData() {
  const response = await fetch("products.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showProducts(productList) {
  for (const product of productList) {
    const productHtml =
      /*html*/
      `<article>
               <h3>${product.name}</h3>
               <p>vægt: ${product.weight} g</p>
               <p>pris: ${product.price},-</p>
               <button>Læg i kurv</button>
            </article>`;
    document.querySelector("#products").insertAdjacentHTML("beforeend", productHtml);
  }
}
