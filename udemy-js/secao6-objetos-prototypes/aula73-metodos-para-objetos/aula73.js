// Aula 73 - Métodos úteis para objetos

// const produto = {nome: 'caneca', preco: 1.8};

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });


// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Produto';
// console.log(produto)

/* const novoProduto = {...produto, quantidade: 12};
novoProduto.nome = 'Bola azul';
novoProduto.preco = 5.9;
console.log(produto);
console.log(novoProduto); */

const produto = {nome: 'caneca', preco: 1.8, quantidade: 12};

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, value] of Object.entries(produto)) {
    console.log(chave, value);
}
