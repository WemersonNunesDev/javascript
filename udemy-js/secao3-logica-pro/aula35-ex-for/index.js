//exercicios Aula35

//      Array
const elementos = [
    { tag: 'p', texto: 'Something about Strings...' }, // indice 0 = objeto
    { tag: 'div', texto: 'Frase 1' }, // indice 1 = objeto
    { tag: 'section', texto: 'Frase 2' }, // indice 2 = objeto
    { tag: 'footer', texto: 'Frase 3' }, // indice 3 = objeto
];

const conteudo = document.querySelector('main#conteudo');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    // console.log(elementos[i].tag);

    let {tag, texto} = elementos[i];
    let postTag = document.createElement(tag);
    let postTexto = document.createTextNode(texto); //2° forma (add uma linha a mais em relação a 1° forma.)

    // postTag.innerText = texto; -> 1° forma
    postTag.appendChild(postTexto);
    div.appendChild(postTag);
}

conteudo.appendChild(div);

/*
*DOM
*Manipulando Objetos do Documento
 */