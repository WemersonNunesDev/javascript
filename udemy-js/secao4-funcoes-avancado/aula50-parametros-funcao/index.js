//  Aula 50 - Parâmetro da função

// argumentos que sustentam todos os argumentos enviados
function funcao(a, b, c) {
    let total =0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c)
};
funcao(1, 2, 3, 4, 5, 6, 7);


// #################################
function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
};
funcao1(1, 2, 3);

// #################################
function funcao2(a = 0, b = 2, c = 4) {
    console.log(a + b + c)
};
funcao2();

// #################################
function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
};
funcao3(['Wemerson', 'Nunes', 24]);

// #################################
const conta1 = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta1('+', 0, 20, 30, 40, 50);
conta1('-', 200, 20, 30, 40, 50);
conta1('*', 1, 20, 30, 40, 50);
conta1('/', 1, 20, 30, 40, 50);

// #################################
const conta2 = (...args) => {
    console.log(args);
};
conta2('+', 0, 20, 30, 40, 50);
