// Aula 76 - Herança
// Camiseta, Caneca, lapis
// Camiseta -> cor | caneca -> material | lapis -> quantidade

const underline = '--------------------------------------------'

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = quantia => this.preco += quantia;
Produto.prototype.desconto = quantia => this.preco -= quantia;

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = Math.round(this.preco + (this.preco * (percentual / 100)));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoque,
        set: valor => {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 16.90, 'Preta');
const caneca = new Caneca('Caneca', 29.90, 'Porcelanato', 6);

for (let [chave, valor] of Object.entries(camiseta)) {
    console.log(chave, valor);
}
console.log(underline)

for (let [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor);
}
console.log(underline);
