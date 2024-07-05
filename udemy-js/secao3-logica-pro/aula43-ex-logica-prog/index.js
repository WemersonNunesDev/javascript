// Aula 43 - Exercicos de Logica de Programação

// Criar uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz ok
// Número é divisivel por 5 = Buzz ok
// Número é divisivel por 3 e 5 = FizzBuzz ok
// Número NÃo é divisivel por 3 e 5 = Retorna o próprio número ok
// Checar se o numero é realmente um número ok
// Usar a função com numeros de 0 a 100

function fizzBuzz(numX) {
    if (typeof numX !== 'number') return NaN;
    if (numX % 5 === 0 && numX % 3 === 0) return 'FizzBuzz';
    if (numX % 3 === 0) return 'Fizz';
    if (numX % 5 === 0) return 'Buzz';
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
