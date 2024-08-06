class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.fieldIsValid();
        const senhasValidas = this.senhasValidas();

        if(validFields && senhasValidas) {
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repeat-password');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.lenght > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
        }

        return valid;
    }

    fieldIsValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.text-user')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUser(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUser(campo) {
        const user = campo.value;
        let valid = true;

        if (user.lenght < 3 || user.lenght > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
