// Aula 55 - Funções imediatas (IIFE) | Immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Nunes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome; 
    }

    function sayName() {
        console.log(criaNome('Wemerson'));
    }

    sayName();
    console.log(idade, peso, altura);
})(`${24} - ${100} - ${1.87}`);
