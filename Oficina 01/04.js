/*
* 04) Calcule a área de um círculo baseado na passagem de seu raio como parâmetro.
*/

function áreaCírculo( raio ){
    return Math.PI * raio ** 2;
};

let raio = 5;
console.log("A área do círculo de raio " + raio + " é " + áreaCírculo(raio));