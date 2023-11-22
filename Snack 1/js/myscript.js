"use strict";

/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const bicycleList = [{
    nome: "Graziella",
    peso: 520
}, {
    nome: "Jumpertrek",
    peso: 800
}, {
    nome: "Fausto Coppi",
    peso: 250
}, {
    nome: "KTM",
    peso: 652
}, {
    nome: "Triciclo",
    peso: 300
}];

const divContainer = document.querySelector(".main-container");
const weightList = bicycleList.map((element) => {
    const { peso } = element;
    return peso;
});
const lighterWeight = Math.min(...weightList);

bicycleList.forEach((element) => {
    const { nome, peso } = element;
    if (lighterWeight === peso) {
        divContainer.innerHTML += `La bici con il peso minore è ${nome} e pesa ${lighterWeight}. `
    }
});