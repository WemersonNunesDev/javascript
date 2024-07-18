// Aula 63 - Método Splice

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//       De onde começa - tipo de ação - elem que vou add
// nomes.splice(indice, delete, elem1, elem2, elem3);
// para remover o o ultimo numero -> const elemRemovido = nomes.splice(-1, Number.MAX_VALUE);
console.log(nomes);
// pop
const pop = nomes.splice(-1, 1);
console.log(nomes, `Elemento removido: ${pop}`);

const elTrocado = nomes.splice(3, 1, 'Thiago');
console.log(nomes, `Elemento trocado: ${elTrocado}`);

// shift
const shift = nomes.splice(0, 1);
console.log(nomes, `Primeiro elemento removido: ${shift}`);

// Push
nomes.splice(nomes.length, 0, 'Luiz');
const push = nomes.join(' ');
console.log(`Elemento add no fim: ${push}`);

// Unshift
nomes.splice(0, 0, 'Bob');
const unshift = nomes.join(' ');
console.log(`Elemento add no inicio: ${unshift}`);
