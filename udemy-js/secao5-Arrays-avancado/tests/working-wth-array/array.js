const inputText = document.querySelector('.add-item-list');
const btnAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
let newLista = [];

console.log(inputText);
console.log(btnAdd);
console.log(list);
console.log(newLista);

btnAdd.addEventListener('click', () => {
    const item = String(inputText.value);

    newLista.push(item);
    newLista.join(' ');
    list.innerText = newLista;

    console.log(newLista.length);

    clearInputText();

})

function clearInputText() {
    inputText.value = '';
}
