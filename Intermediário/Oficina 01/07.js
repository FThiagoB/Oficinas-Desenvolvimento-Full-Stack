/*
* 07) Crie uma função que gere os primeiros n números da sequência de Fibonacci.
*
* Fibonacci: sequência onde cada número é a soma dos dois anteriores, começando com 0 e 1.
*/

function Fibonacci( qtdNúmeros ){
    // Verifica se é negativo
    if( qtdNúmeros < 0 )
        return NaN;

    // Verifica se é zero
    else if( qtdNúmeros == 0 )
        return [];

    // Quer apenas o primeiro?
    else if( qtdNúmeros == 1 )
        return [0];

    let seq = [0, 1]

    for( let i = 1; i < qtdNúmeros - 1; i++ ){
        let penúltimo = seq[i - 1]; // Penúltimo elemento
        let último = seq[ i ];      // Último elemento
        
        seq.push( penúltimo + último );
    }

    return seq;
};

let n = 10;
console.log("Os " + n + " número da seq. de Fibonacci são: " + Fibonacci(n));