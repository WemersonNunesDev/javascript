// Atribuição via desestruturação (Arrays)

const numeros = [[100, 200, 300], [400, 500, 600], [700, 800, 900]];

const [lista1, lista2, lista3] = numeros;

console.log(lista2[1]);
// const [um, , tres, , cinco, , sete, ...resto] = numeros;

// console.log(um, tres, cinco, sete);
// console.log(resto)
