console.clear();
const prompt = require('prompt-sync')();


console.log('Para desfrutar de uma ótima viagem é necessário fazer um check list com algumas perguntas, responda abaixo:  ');

console.log();

console.log('Digite "1" para sim e "0" para não.');

console.log();

let sim = 0


let perg1 = prompt('Comprou as passagens? ');
if (perg1 == 1 ) {
    sim++
}
let perg2 = prompt('Reservou a hospedagem? ');
if (perg2 == 1 ) {
    sim++
}
let perg3 = prompt('Fez o roteiro? ');
if (perg3 == 1 ) {
    sim++
}
let perg4 = prompt('Fez as malas?');
if (perg4 == 1 ) {
    sim++
}
let perg5 = prompt('Alugou um carro?' );
if (perg5 == 1 ) {
    sim++
}

console.log();

if (sim == 0 ) {
    console.log('A sua viagem foi péssima!');
}
if (sim > 0 && sim <= 2) {
    console.log('A sua viagem não foi tão boa assim!'
    );
}
if (sim == 3) {
    console.log('A sua viagem poderia ser melhor!');
}
if (sim == 4) {
    console.log('A sua viagem foi quase perfeita!');
}
if (sim == 5) {
    console.log('A sua viagem foi perfeita!')
}
