// Aula 78 - Polimorfismo
const underline = '----------------------------------------';
// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Agencia/Conta.:${this.agencia}/${this.conta}`);
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const conta = new Conta(11, 22, 100);

const cc = new ContaCorrente(22, 33, 0, 1000);

cc.depositar(10);
console.log(underline);
console.log(cc.limite);
console.log(underline);

cc.sacar(110);
