/* 
* 12) Crie uma função que valide um CPF (formato brasileiro) de acordo com as regras oficiais.
*
* "O algoritmo de validação do CPF calcula o primeiro dígito verificador a partir dos 9 primeiros dígitos do CPF, e em seguida, calcula o segundo dígito verificador a partir dos 9 (nove) primeiros dígitos do CPF, mais o primeiro dígito".
*/

function validaCPF( cpf ){
    // Verifica se é maior que 11 caracteres
    if( cpf.length > 11 ){
        console.log("Entre apenas com os números do CPF");
        return undefined;
    }

    // Verifica o primeiro digito validador com base nos primeiros 9 digitos
    let primeiro_validador = validador( cpf.slice(0, 9) )
    
    if( primeiro_validador != cpf[9] )
        return "inválido";

    // Verifica o segundo digito validador com base nos 10 digitos anteriores 
    let segundo_validador = validador( cpf.slice(0, 10) )
    
    if( segundo_validador != cpf[10] )
        return "inválido";
    
    return "válido";
};

function validador( digitos ){
    let soma = 0;

    // Calcula a soma da multiplicação dos digitos por fatores começados por 2 para o último elemento
    for( let i = digitos.length - 1, fator = 2; i >= 0; i--, fator++ ){
        soma += digitos[i] * fator;
    }

    // Verifica o resto da divisão da soma
    resto = soma % 11;

    // Retorna o digito validador conforme o valor do resto
    if( resto < 2 )
        return 0;

    return 11 - resto;
}

cpf = "11144477735";
console.log( cpf + " é um CPF " + validaCPF(cpf) );