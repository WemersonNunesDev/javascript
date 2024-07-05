// Aula 40 - Break & Continue
//  Continue - segue para a próxima iteração
//  Break - sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let num = numeros[i];

    if (num === 2) {
        console.log('Pulei o número 2!');
        i++;
        continue;
    }

    console.log(num);

    if (num === 7) {
        console.log('Valor 7 encontrado - Quebrando.');
        i++;
        break;
    }
    i++;
} while (i < numeros.length)
