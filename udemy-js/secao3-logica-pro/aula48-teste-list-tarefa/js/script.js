const inputTarefa = document.querySelector('#tarefa');
const btnAdd = document.querySelector('.btn');
const lista = document.querySelector('.lista');
const btnApagar = document.querySelector('.apagar');

// cria o elemento <li> para ser adicionado a lista
function itemList() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        postTarefa(inputTarefa.value);
    }
});

function cleanInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function btnDelete(li) {
    li.innerText += ' ' 
    const textBtnDelete = document.createElement('button');
    textBtnDelete.innerText = 'APAGAR';
    textBtnDelete.setAttribute('class', 'apagar');
    li.appendChild(textBtnDelete);
}

// Cria o item
function postTarefa(textoInput) {
    const li = itemList();
    li.innerText = textoInput; // adiciona o valor do input a função itemList() -> função que cria o <li> 
    lista.appendChild(li);
    cleanInput();
    btnDelete(li);
    saveTarefas();
}

btnAdd.addEventListener('click', function () {
    if (!inputTarefa.value) return;

    postTarefa(inputTarefa.value);
})

document.addEventListener('click', function (e) {
    const elemento = e.target;
    
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        console.log(elemento.parentElement);
        saveTarefas();
    }
});

function saveTarefas() {
    const listaDeTarefas = lista.querySelectorAll('li');
    console.log(listaDeTarefas);
    const todasTarefas = [];

    for (let tarefa of  listaDeTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('APAGAR', '').trim();
        todasTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(todasTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
    // console.log(tarefasJSON);
}

function addSavedTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        postTarefa(tarefa);
    }
}

addSavedTarefas();
