// const nomes = ['Wemerson', 'Marcos', 'Thiago'];
// ou ppodemos usar o construtor
const underline = '------------------------------------------------------';
const nomes = new Array('Wemerson', 'Marcos', 'Thiago');
console.log(nomes);
// nomes[2] = 'Andrey';
// console.log(nomes);
// delete nomes[2];
// console.log(nomes);

// ##################

// const novo = [...nomes];
const primeiroRemovido = nomes.shift();
console.log(nomes, `O nome removido foi ${primeiroRemovido}`);

console.log(underline);

const newNames = nomes.unshift('Wemerson');

const ultimoRemovido = nomes.pop();
console.log(nomes, `O nome removido foi ${ultimoRemovido}`);

