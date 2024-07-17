//  Aula 49 - As várias maneiras de declarar funções em JavaScript

// Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
}

//  First-class objects (Objetos de primeria classe)
// Function expression
// Não podemos chamar a função neste caso pois como uma váriavel, é como se não estivesse defifnido
const souUmDado = function() {
    console.log('Sou um dado');
};

executaFuncao(souUmDado);
function executaFuncao(funcao) {
    console.log('Estou executando a função abaixo: "souUmDado()".')
    funcao();
}

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const objeto = {
    falar: function () {
        console.log('Estou falando...')
    }
};

objeto.falar();
