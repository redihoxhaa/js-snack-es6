"use strict";

/* Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const teamList = [{
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
}];

teamList.forEach((element) => {
    element["puntiFatti"] = Math.floor(Math.random() * 80 + 1);
    element["falliSubiti"] = Math.floor(Math.random() * 30 + 1);
})

const newArray = teamList.map((element) => {

    const { nome, falliSubiti } = element;
    return { nome, falliSubiti };

})

console.log(newArray);