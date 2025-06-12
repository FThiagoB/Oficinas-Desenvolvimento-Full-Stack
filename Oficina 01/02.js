/*
* 02) Crie uma função que calcule a potência do primeiro número elevado ao segundo número.
*/

function power( num, exp ){
    return num ** exp;
};

let numero = 4;
let exp = 4;

console.log(numero + " elevado a " + exp + " resulta em " + power(numero, exp));