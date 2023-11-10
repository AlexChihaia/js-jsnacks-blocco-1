'use strict';

/* L’utente inserisce due parole in successione, con due prompt. */

const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");


/* Il software stampa prima la parola più corta, poi la parola più lunga. */

if (parola1.length > parola2.length) {
    console.log(parola1, parola1.length, 'lettere');
}
else {
    console.log('La parola più lunga è : ', parola2, parola2.length, 'lettere');

}