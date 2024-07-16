function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressEnter();
        this.pressionaBackSpace();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deletOne();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            this.display.focus();
        });

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        };

        this.pressionaBackSpace = () => {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        };

        this.pressEnter = () => {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) this.realizaConta();
            });
        };

        this.addNumDisplay = el => this.display.value += el.innerText;
        this.clearDisplay = () => this.display.value = '';
        this.deletOne = () => this.display.value = this.display.value.slice(0, -1);
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
