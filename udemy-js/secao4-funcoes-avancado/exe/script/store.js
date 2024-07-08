const nameProduct = document.querySelector('.nome-de-produto');
const btnAddProduct = document.querySelector('.add-product');
const estoque = document.querySelector('.estoque');

function creatItem() {
    const li = document.createElement('li');
    return li;
}

function cleanNameProduct() {
    nameProduct.value = '';
    nameProduct.facus();
}

function postProduct(textProduct) {
    const li = creatItem();
    li.innerText = textProduct;
    estoque.appendChild(li);
    cleanNameProduct();

}

nameProduct.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if(!nameProduct.value) return;
        postProduct(nameProduct.value);
    }
})

btnAddProduct.addEventListener('click', function() {
    if(!nameProduct.value) return;
    postProduct(nameProduct.value);
});


