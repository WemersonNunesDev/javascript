// Avaliação de Curto-Circuito

/**FALSY
 * false
 * 0
 * '' "" ``
 * null / underfined
 * NaN
 * O programa sempre busca retornar o valor True | Verdadeiro
 */

function ola() {
    return 'Olá'
}

let vaiExecutar = 'Thiago';

// console.log(vaiExecutar && ola()); 
// vaiExecutar é uma String ola() é uma String
/**
 * Os dois sendo uma string o programa retorna o valor da ultima variável que 
 * em nosso caso é o 'Olá' da função ola()
 */

console.log(0 || false || null || 'Wemerson' || true);
