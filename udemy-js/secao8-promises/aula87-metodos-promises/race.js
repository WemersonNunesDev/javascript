const greenYelllow = 'color: greenyellow';
const skyblue = 'color: skyblue';
const violet = 'color: violet';
const red = 'color: red';
const orange = 'color: orange';

console.log('%c Aula 87 - Métodos úteis para Promises', `${skyblue}`);

function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERRO: erro esperado.');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all PRomise.race Promise.resolve Promise.reject
const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    esperaAi(2222, rand(1, 3))
];

Promise.race(promises)
    .then(function (valor) {
        console.log(`%c ${valor}`, `${greenYelllow}`);
        console.log('%c Desenvolvedor: Promise.race devolve a primeria resposta encontrada/resolvidoa. Neste caso, com menor tempo de duração será a única a aparecer.', `${violet}`);
    })
    .catch(function(erro) {
        console.log(`%c ${erro}`, `${orange}`);
    })
