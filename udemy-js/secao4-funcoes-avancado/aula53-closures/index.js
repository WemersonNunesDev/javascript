// Aula 53 - Closures

function retornaFuncao(nome) {
    // const nome = 'Wemerson';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Wemerson');
const funcao1 = retornaFuncao('Nunes');
console.dir(funcao());
console.dir(funcao1());

console.log(funcao(), funcao1());
