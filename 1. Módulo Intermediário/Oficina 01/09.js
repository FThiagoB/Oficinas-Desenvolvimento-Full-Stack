/*
* 09) Escreva uma função que recebe um número e retorna se ele é par ou ímpar.
*/

function paridade( number ){
    return (number % 2) ? "ímpar" : "par";
};

let num = 11;
console.log("O número " + num + " é " + paridade(num))