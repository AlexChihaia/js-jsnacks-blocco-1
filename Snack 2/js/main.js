'use strict';

/* L’utente inserisce due parole in successione, con due prompt. */

const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");

/* Il software stampa prima la parola più corta, poi la parola più lunga */

if (parola1.length > parola2.length) {
    console.log('La parola più corta è :', parola2, 'Numero di lettere:', parola2.length);
    console.log('La parola più lunga è :', parola1, 'Numero di lettere:', parola1.length);
} else if (parola1.length < parola2.length) {
    console.log('La parola più corta è :', parola1, 'Numero di lettere:', parola1.length);
    console.log('La parola più lunga è :', parola2, 'Numero di lettere:', parola2.length);
} else {
    console.log(parola2, 'Numero di lettere:', parola2.length);
    console.log(parola1, 'Numero di lettere:', parola1.length);
    console.log("Le parole hanno la stessa lunghezza.");
}

