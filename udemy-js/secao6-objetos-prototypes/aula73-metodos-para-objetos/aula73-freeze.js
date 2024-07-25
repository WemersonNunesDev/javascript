const produto = {nome: 'Produto', preco: 1.8};
Object.freeze(produto); // Assim não poderá ser alterado

console.log(Object.keys(produto));