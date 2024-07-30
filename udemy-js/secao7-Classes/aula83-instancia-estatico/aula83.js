// Aula 83 - métodos de instância e estáticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuaVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const control = new ControleRemoto('britania');

control.aumentarVolume();
control.aumentarVolume();
control.aumentarVolume();
control.aumentarVolume();
control.diminuaVolume();

console.log(control);
ControleRemoto.trocaPilha();
