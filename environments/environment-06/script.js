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
  showProducts(products);
  document.querySelector("#products button").addEventListener("click", addToBasket);
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
    const productHtml = /*html*/ `<article>
      <h3>${product.name}</h3>
      <p>vægt: ${product.weight} g</p>
      <p>pris: ${product.price},-</p>
      <button>Læg i kurv</button>
    </article>`;
    document.querySelector("#products").insertAdjacentHTML("beforeend", productHtml);
  }

  const buttons = document.querySelectorAll("#products button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addToBasket(index);
    });
  });
}

function addToBasket(index) {
  const selectedProduct = products[index];
  basket.push(selectedProduct);
  console.log("Produkt tilføjet til kurven:", selectedProduct);
  // Opdater visningen af kurven på siden her
  console.log(basket);
  showBasket(basket);
}

function showBasket(basketList) {
  for (const basketProduct of basketList) {
    const basketHtml = /*html*/ `<tr>
              <td>
                <button class="remove">-</button>
                  ANTAL
                <button class="add">+</button>
              </td>
              <td>${basketProduct.name}</td>
              <td>${basketProduct.price}</td>
              <td>${basketProduct.name}</td>
            </tr>`;
    document.querySelector("#basket").insertAdjacentHTML("beforeend", basketHtml);
  }
}
