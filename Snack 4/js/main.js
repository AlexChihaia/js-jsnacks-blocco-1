'use strict';


let array = [];


let somma = 0;


while (somma < 50) {

	let numero = Number(prompt('Enter a number: '));


	array.push(numero - 1);


	somma += numero;


}


console.log('Array:', array);
console.log('Somma:', somma);