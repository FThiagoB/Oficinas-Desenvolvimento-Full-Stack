/*
* 05) Escreva uma função que receba um array de números e retorne apenas os números pares;
*/

function getPares( nArray ){
    let pares = [];

    // Percorre os elementos da lista
    for( n of nArray )
    {
        // Se for par, adiciona na lista
        if( (n % 2) == 0 )
            pares.push( n );
    }

    return pares;
};

let numeros = [2, 5, 3, 8, 9, 12, 14, 57, 82, 100, 0, 8, 101];
console.log("Os pares do array são " + getPares(numeros));