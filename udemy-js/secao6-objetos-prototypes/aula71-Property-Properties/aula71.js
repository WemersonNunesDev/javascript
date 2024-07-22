// Aula 71 - Object.defineProperty e Object.definieProperties()

// Mais controle
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

const item1 = new Produto('Camiseta', 20, 3);

console.log('Item: ' + item1.nome);
console.log('Preço: ' + item1.preco);
console.log('Estoque: ' + item1.estoque);

console.log(Object.keys(item1));
