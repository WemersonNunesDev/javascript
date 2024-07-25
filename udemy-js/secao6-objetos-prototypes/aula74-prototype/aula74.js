// Aula 74 - Prototypes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

const pessoa1 = new Pessoa('Marcos', 'A');
const pessoa2 = new Pessoa('Thiago', 'P');

console.dir(pessoa1);
console.dir(pessoa2);
