// Aula 81 - Getters e Setters em Class

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade] ++;
    }

    desacelerar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const fusca = new Carro('Fusca');

// for(let i = 0; i <= 200; i++) {
//     fusca.acelerar();
// }

fusca.velocidade = 99;
console.log(fusca.velocidade)