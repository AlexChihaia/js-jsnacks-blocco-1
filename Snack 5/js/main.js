'use strict';


const N = Number(prompt('Inserisci un numero di array da generare :'));

for (let i = 0; i < N; i++) {
    let myArray = [];
    for (let j = 0; j < 10; j++) {
        myArray.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(myArray);
    alert('Numeri della mia lista:' + myArray);
}

