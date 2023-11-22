"use strict";

/* Bonus Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

const testArray = ["Mario", "Luigi", "Giovanni", "Pasquale", "Davide", "Lorenzo", "Gaetano", "Paolo", "Andrea"];

function pickElements(arr, min, max) {
    const newArray = arr.filter((element) => {
        const index = arr.indexOf(element);
        if (index > min && index < max)
            return true;
    })
    return newArray;
}

console.log(pickElements(testArray, 2, 4));