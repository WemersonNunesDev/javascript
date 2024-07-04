// ***** More differences between variables

const verd = true;

// Não se pode redeclarar uma variável LET no mesmo escopo
// LEt tem escopo de bloco {...bloco}
let nome = 'Marcos'; //criando uma nova variável
var nome2 = 'Thiago'; //criando e definindo -> escopo global
const nome3 = 'Dinaldo'

if (verd) {
    // LET de nomes iguais, escopo diferentes. 
    let nome = 'Wemerson'; //criando uma nova variável
    var nome2 = 'Andrey'; // redefinindo uma variável já criada.

    console.log(nome, nome2, nome3);

    if (verd) { 
        let nome = 'Caio';
        var nome2 = 'Roger';

        console.log(nome, nome2, nome3);
    }
    
}

console.log(nome, nome2, nome3);
