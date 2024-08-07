const greenYelllow = 'color: greenyellow';
const skyblue = 'color: skyblue';
const violet = 'color: violet';
const orange = 'color: orange';
const red = 'color: red';
const dev = 'Desenvolvedor';
const autor = 'Wemerson Nunes';

console.log(`%c Aula 88 - Async / Await`, `${skyblue}`)
console.log(`%c ${dev}: ${autor}`, `${violet}`);

function rand(max = 0, min = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAÍ NO ERRO');
                return;
            };

            resolve(msg.toUpperCase());
            return;
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand());
        console.log(`%c ${fase1}`, `${greenYelllow}`);

        setTimeout(function() {
            console.log(`%c Essa promise estava pendente ${fase1}`, `${orange}`);
        }, 1100);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(`%c ${fase2}`, `${greenYelllow}`);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(`%c ${fase3}`, `${greenYelllow}`); 
    
        console.log(`%c Terminamos na fase: ${fase3}`, `${greenYelllow}`);
    } catch(e) {
        console.log(`%c ${e}`, `${orange}`)
    }
}

executa();