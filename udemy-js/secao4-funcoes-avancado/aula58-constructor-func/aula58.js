// Aula 58 - Funções Construtoras

// Função construtora -> constroi objetos
// Função fábrica -> fabrica objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const person1 = new Pessoa('Wemerson', 'Nunes');
const person2 = new Pessoa('Marcos', 'Almeida');

console.log(`${person1.nome} ${person1.sobrenome}`);
console.log(`${person2.nome} ${person2.sobrenome}`);
