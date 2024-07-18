// Aula 66 - Mapeando o array
// Usando MAP
const underline = '================================================================';

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);
console.log(underline);

const doubleNum = numeros.map(x => x * 2);
console.log(`Doubled numbers:`);
console.log(doubleNum);
console.log(underline);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const namesList = pessoas.map(obj => obj.nome);

const years = pessoas.map(obj => ({idade: obj.idade}));

const keyIds = pessoas.map((obj, indice) => {
    // obj.id = (indice + 1) * 100;
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(namesList);
console.log(years);
console.log(keyIds);
