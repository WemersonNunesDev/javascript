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

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache.')
    } else {
        return esperaAi('Baixei a página', rand(1, 5))
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(`%c ${dadosPagina}`, `${greenYelllow}`);
    })
    .catch(e => console.log(`${e}`));
