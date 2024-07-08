const inputTarefa = document.querySelector('#tarefa');
const btnAdd = document.querySelector('.btn');
const lista = document.querySelector('.lista');
const btnApagar = document.querySelector('.apagar');

function itemList() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    // console.log(e);
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        postTarefa(inputTarefa.value);
        // console.log('ENTER presionado.');
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
    // textBtnDelete.classList.add('apagar');
    textBtnDelete.setAttribute('class', 'apagar');
    li.appendChild(textBtnDelete);
}

function postTarefa(textoInput) {
    const li = itemList();
    li.innerText = textoInput;
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
