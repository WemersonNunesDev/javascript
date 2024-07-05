// Aula 37 - FOR OF

const pessoa = {
    nome: 'Wemerson',
    sobrenome: 'Nunes'
};

/**
 * For Clássico - Geralmente com interáveis (arrays ou strings)
 * For in - Retorna o índice ou chave (string, array ou objetos)
 * For of - Retorna o valor em si (interaveis, arrays ou strings)
 */

// for in funciona para objetos
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const nomes = ['Wemerson', 'Nunes'];

// Forma 1
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

console.log('#########')

// Forma 2
for (let i in nomes) {
    console.log(nomes[i])
}

console.log('#########')

// Forma 3
for (let i of nomes) {
    console.log(i)
}

console.log('#########')

// Forma 4
nomes.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
})
