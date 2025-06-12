/*
* 13) Desenvolva uma função que implemente um cronômetro simples, contando segundos, exibindo o resultado no console.
*/

// Solução encontrada com base no uso do setTimeout e de variáveis de escopo global
let tempoDecorrido = 0;

function cronometro(){
    console.log("Cronômetro: " + tempoDecorrido + " segundos decorridos.");
    tempoDecorrido++;

    agenda();
}

function agenda(){
    setTimeout(
        cronometro, 1000
    );
}

// Inicializa o cronômetro
agenda();