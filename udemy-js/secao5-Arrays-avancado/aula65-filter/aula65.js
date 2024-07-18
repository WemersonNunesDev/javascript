// Aula 65 - Filtrando o array
const underline = '================================================================';
// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const maiorQueDez = (valor) => valor >= 10;
const maiorQueDez = numeros.filter(valor => valor > 10);
console.log(`New Array with all numbers bigger than: ${maiorQueDez}`);

console.log(underline);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length > 5);
console.log(nomesGrandes);

const moreThanFifiteenYears = pessoas.filter(obj => obj.idade > 50);
console.log(moreThanFifiteenYears);

const letterA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(letterA);

console.log(underline);
