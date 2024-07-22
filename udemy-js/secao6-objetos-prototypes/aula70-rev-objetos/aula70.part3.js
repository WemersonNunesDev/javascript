// Aula 70 - PArte 3 - Usando Factory functios / Constructor functios / Classes

// Factory Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get completName() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const person = criaPessoa('Luiz', 'Otávio');
console.log(person.completName);

// Construtuctor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
p1.nome = 'Outra coisa';
console.log(p1);
console.log(p2);
