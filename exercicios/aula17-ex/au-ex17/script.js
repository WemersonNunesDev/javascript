/*Foi criado uma variável para registrar os números que o usuário inserir. Depois, outra variável foi definida para a lista de registro dos números inseridos.*/

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    //O -1 indica que o valor não foi encontrado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert('Tudo Ok!')
    } else {
        alert('Valor inválido ou já adicionado!')
    }
}