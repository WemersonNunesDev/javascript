// Aula 39 - While | Do While
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max); // Gera um valor aleatorio

while(rand !== 10) { // Verifica se o valor gerado foi diferente de 10. Se for True:
    rand = random(min, max); // Atualiza o valor com outro número aleatorio
    console.log(rand);
}

console.log('########');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
