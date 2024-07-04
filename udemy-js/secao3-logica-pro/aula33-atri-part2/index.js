const pessoa = {
    nome: 'Wemerson',
    sobrenome: 'Nunes',
    idade: 24,
    endereco: {
        rua: 'Rua das Flores',
        numero: 1765
    }
}

const {nome, sobrenome} = pessoa;
const {endereco: {rua: r = 'Não informado', numero}} = pessoa;

console.log(nome, sobrenome);
console.log(r, numero);
