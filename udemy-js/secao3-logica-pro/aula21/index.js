/**
 * Operadores de comparação
 * > maior que
 * > maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (valor) ********
 * === igualdade estrita (valor)(tipo)
 * != diferente (valor) ********
 * !== diferente estritio (valor)(tipo)
 */

var numX = 10;
var numY = '10';
const igualdadeEstritaValor = numX == numY; //tem o mesmo valor
const igualdadeEstritaValorTipo = numX === numY; //mesmo valor, porém, tipos diferentes

console.log(igualdadeEstritaValor)
console.log(igualdadeEstritaValorTipo)
