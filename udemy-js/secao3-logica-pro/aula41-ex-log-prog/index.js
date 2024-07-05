//  Aula 41 - Escreva uma função que recebe 2 números e retorne o maior deles

const main = document.querySelector('#conteudo');
const div = document.createElement('div')

const numX = (x, y) => x > y ? x : y;
const num = numX(10, 20)

div.innerHTML += num;
main.appendChild(div);
