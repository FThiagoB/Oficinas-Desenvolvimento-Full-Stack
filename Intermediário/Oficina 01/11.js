/*
* 11) Crie uma função que receba dois números e um operador (+, -, *, /) e retorne o resultado da operação.
*/

function calc( a, b, op ){
    let res = NaN;

    switch( op ){
        case "+":
            return a + b;
        
        case "-":
            return a - b;

        case "*":
            return a * b;
        
        case "/":
            return a / b;
    }

    return res;
}

let numA = 4;
let numB = 5;
let op = "/";

console.log(numA + " " + op + " " + numB + " = " + calc(numA, numB, op));