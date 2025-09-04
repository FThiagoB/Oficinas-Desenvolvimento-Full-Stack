/*
* 03) Calcule o fatorial de um número passado por uma função.
*/

function fatorial( numero ){
    res = 1;

    // Retorna NaN se for negativo
    if( numero < 0 )
        return NaN;

    for( let i = numero; i > 1; i-- )
        res *= i;

    return res;
};

let numero = 5;
console.log("O fatorial de " + numero + " é " + fatorial(numero));