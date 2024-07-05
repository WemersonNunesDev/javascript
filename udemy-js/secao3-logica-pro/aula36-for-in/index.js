// Aula 36 - FOR iN

const pessoa = {
    nome: 'Wemerson',
    sobrenome: 'Nunes',
    idade: 24,
}
// const chave = 'nome';

/* console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave]); */

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

/* const frutas = ['Banana', 'Abacaxi', 'Melão', 'Pera'];

for (let i in frutas) {
    console.log(frutas[i])
}

for (let i = 0; i < frutas.length; i++) {
    console.log(i)
} */
