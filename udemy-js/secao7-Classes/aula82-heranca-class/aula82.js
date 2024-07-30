class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }

        this.ligado = true;
    }

    desligado() {
        if(this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const iphone = new Smartphone('iPhone', 'Branco', '11 pro Max Optimus Prime');
iphone.ligar();
// iphone.desligado();
console.log(iphone);
