// Aula 71 - Getters e Setters
// get -> obter valor
// set -> setar/enviar/configurar

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado =estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: () => estoquePrivado,
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

// const item1 = new Produto('Camiseta', 20, 3);
// console.log('Item: ' + item1.nome);
// console.log('Preço: ' + item1.preco);
// console.log('Estoque: ' + item1.estoque);
// console.log(Object.keys(item1));
// console.log(item1);
// item1.estoque = 'O valor é';
// console.log(item1.estoque);

const item2 = criaProduto('Camiseta');
console.log(item2.nome);
