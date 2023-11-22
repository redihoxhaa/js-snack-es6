# SNACKS

#### CONSEGNA DEGLI ESERCIZI:


##### SNACK 1
```
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
```


##### SNACK 2
```
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
```


##### SNACK 3
```
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
```

---

#### SVOLGIMENTO

- SNACK 1 - Partiamo con la creazione del nostro array di oggetti nel nostro file JS. Decidiamo di crearne 5 con nome e peso diversi tra di loro. Creaimo un div nell'HTML dentro il nostro main con classe **main-container**, che andiamo a selezionare nel file JS tramite querySelector, dichiarandolo in una costante **divContainer**. Inizializziamo un ciclo Map dentro una variabile **weightList** per selezionare gli oggetti degli array in una variabile **element**. Dentro il ciclo andiamo a salvare dichiarare variabile omonima alla key che ci interessa, attraverso la destrutturazione. In questo caso avremo `const {peso} = element`, il cui valore sarà il valore della key omonima. Usiamo il metodo _Math.min(...weightList)_ per andare ad estrapolare il peso minore dalla lista di elementi del nuovo array. Per riassociare quel peso alla bici selezionata inizializziamo un ciclo **forEach** nel quale andiamo a ciclare tutti gli elementi dell'array iniziale. Dichiariamo una condizione per la quale se la variabile che contiene il peso minore, matcha con il valore della key **peso** di un qualsiasi elemento durante il ciclo, verrà stampato nell'HTML anche il valore della chiave **nome** di quell'elemento. Sfruttiamo anche il fatto che il ciclo forEach non può essere fermato, per stampare più biciclette se queste hanno uguale peso.

- SNACK 2 -

- SNACK 3 -