/*
* 10) Crie uma função que recebe uma string e retorna essa string invertida.
*/

function inverte( frase ){
    let invertida = [];

    // Percorre o vetor/frase de trás para a frente
    for( let i = frase.length - 1; i >= 0; i-- )
        invertida.push( frase[i] );

    // Retorna a frase invertida
    return invertida.join("");
}

let frase = "Apenas um pequenino teste... certo?";
console.log( inverte(frase) );
