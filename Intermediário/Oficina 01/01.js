/*
* 01) Crie uma função que recebe dois valores e retorne o maior dos dois.
*/

function escolheMaior( a, b ){
    return (a > b) ? a : b;
};

let numeroA = 10;
let numeroB = -34;

console.log("O maior entre os número " + numeroA + " e " + numeroB + 
            " é " + escolheMaior(numeroA, numeroB));