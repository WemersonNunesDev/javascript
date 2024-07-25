const produto = {nome: 'caneca', preco: 1.8};
const caneca = Object.assign({}, produto, {quantidade: 12});

caneca.nome = 'Bola azul';
caneca.preco = 5.9;

console.log(produto);
console.log(caneca);