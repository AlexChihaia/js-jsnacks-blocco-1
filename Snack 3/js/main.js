'use strict';



/* Il software deve chiedere per 10 volte all’utente di inserire un numero. */
let somma = 0;

for (let i = 0; i < 10; i++) {
    const num = Number(prompt((i + 1), 'Inserisci un numero:'));

    if (isNaN(num)) {
        alert('Non è un numero , inserisci nuovamente');
        i--;
    } else {
        somma = somma + num;
    }
    console.log('Il numero che hai scelto è :' + num);
}



/* Il programma stampa la somma di tutti i numeri inseriti. */


console.log('La somma di tutti i numeri inseriti è: ' + somma);
