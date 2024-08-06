// Aula 84 - Validando CPF

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo === 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        this.novoCPF = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito) {
        let total =0;
        let reverso = cpfSemDigito.length + 1;

        for(let StringNum of cpfSemDigito) {
            total += reverso * Number(StringNum);
            reverso --;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}

// let cpf = new ValidaCPF();

// if (cpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }
