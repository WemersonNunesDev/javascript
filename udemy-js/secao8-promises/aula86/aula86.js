const greenYelllow = 'color: greenyellow;';
const violet = 'color: violet;';
const red = 'color: red;';

function numRandom(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

console.log(`%c Console: ${numRandom(1, 3)}`, `${violet}`);

esperaAi('Conexão com DataBase.', numRandom(1, 3))
    .then(resposta => {
        console.log(`%c ${resposta}`, `${greenYelllow}`);
        return esperaAi('Buscando dados da BASE...', numRandom(1, 3));
    })
    .then(resposta => {
        console.log(`%c ${resposta}`, `${greenYelllow}`);
        return esperaAi('Tratando os dados da BASE...', numRandom(1, 3));
    })
    .then(resposta => {
        console.log(`%c ${resposta}`, `${greenYelllow}`);
    })
    .catch(e => {
        console.log(`%c ERRO: ${e}`, `${red}`);
    });
