// Environment: `environment-00`

// 1. Lav en funktion `clicked`, der udskriver "Det virker" i konsollen, når man trykker på knappen på HTML-siden.
// 2. Udvid funktionen så den skjuler teksten `#result_failure` og viser teksten `#result_success` ved hjælp af klasserne `hide` og `show`.
// 3. Tilføj en funktion der automatisk skjuler begge tekster så snart siden loades - sørg for at knappen stadig virker og viser den rette tekst.

"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    hideText();
    document.querySelector("button").addEventListener("click", clicked);
}

function clicked() {
    console.log("Det virker");
    document.querySelector("#result_failure").classList.add("hide");
    document.querySelector("#result_success").classList.add("show");
}

function hideText() {
    document.querySelector("#result_failure").classList.add("hide");
    document.querySelector("#result_success").classList.add("hide");
}