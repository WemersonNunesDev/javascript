const underline = '--------------------------------------------------';

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const buy1 = new Produto('Camiseta', 50);
const buy2 = new Produto('Bermuda', 59.90);

buy1.desconto(18);
buy2.aumento(22);

for(let [chave, value] of Object.entries(buy1)) {
    console.log(chave, value);
}
console.log(underline);

for(let [chave, value] of Object.entries(buy2)) {
    console.log(chave, value);
}
console.log(underline);

const buy3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamnaho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

buy3.aumento(10);

for(let [chave, value] of Object.entries(buy3)) {
    console.log(chave, value);
}
console.log(underline);
