/*
* 06) Escreva uma função que receba um array de números e retorne o maior número presente no array.
*/

function getMaior( vetor ){
    let maior = NaN;
    
    // Percorre os elementos do array (pelo índice)
    for( let i in vetor ){

        // Verifica se o número atual é o maior da sequência
        if( (vetor[i] > maior) || isNaN(maior) )
            maior = vetor[i];
    }

    return maior;
};

let numeros = [-5, 9, 0, 32, 100, 40, 8, 24, 50, 101, 200, 50];
console.log("O maior elemento do array é " + getMaior(numeros))