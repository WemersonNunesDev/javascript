// Aula 67 - Reduzindo o array

const underline = '================================================================';

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);

const total = numeros.reduce(function (acumulador, valor) {
    // acumulador.push(valor * 2);
    // if(valor % 8 === 0) acumulador.push(valor);
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);
console.log(underline);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];

const old = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(old)
