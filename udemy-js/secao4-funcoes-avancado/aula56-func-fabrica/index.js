// Aula 56 - Funções Fábrica

// O THIS refere-se a pessoa que o chama. No caso abaixo, quem chama é o p1 e o this se refere a ele.

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Stter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto = 'flanado sobre nada') {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            const massaCorporal = this.peso / (this.altura ** 2);
            return massaCorporal.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Wemerson', 'Nunes', 1.87, 115);
const p2 = criaPessoa('Alice', 'Oliveira', 1.74, 74);
const p3 = criaPessoa('Marcos', 'Almeida', 1.65, 70);

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);
console.log(p3.nomeCompleto);