/*
* 08) Escreva uma função que conte quantas vogais existem em uma string fornecida.
*/

function contaVogais( frase ){
    qtdVogais = 0;
    vogais = ["a", "e", "i", "o", "u"];

    // Percorre as letras da frase (convertida para minúscula)
    for( letra of frase.toLowerCase() ){
        if( vogais.includes( letra ) )
            qtdVogais++;
    }

    return qtdVogais;
}

let frase = "Hello World :)";
console.log("A frase '" + frase + "' possui " + contaVogais(frase) + " vogais.");