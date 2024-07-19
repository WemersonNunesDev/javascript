// Aula 68 - Filter - map - reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numPares = numeros.filter(valor => valor % 2 === 0);
const numSomDouble = numeros.filter(valor => valor % 2 === 0).map(x => x * 2);
const somaDouNums = numeros.filter(valor => valor % 2 === 0).map(x => x * 2).reduce((acumulador, valor) => acumulador += valor);

console.log('Array with num par:', numPares);
console.log('Array with double numbers:', numSomDouble);
console.log('Sum all numbers:', somaDouNums);
