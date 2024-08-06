const greenYelllow = 'color: greenyellow';
const skyblue = 'color: skyblue';
const violet = 'color: violet';
const red = 'color: red';

console.log('%c Aula 87 - Métodos úteis para Promises', `${skyblue}`);

function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all PRomise.race Promise.resolve Promise.reject
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 2)),
    esperaAi('Promise 2', rand(0.5, 1)),
    esperaAi('Promise 3', rand(1, 3)),
    'Outro valor'
];

Promise.all(promises)
    .then(function (valor) {
        console.log(`%c ${valor}`, `${greenYelllow}`);
    })
    .catch(function(erro) {
        console.log(`%c ${erro}`, `${red}`);
    })
