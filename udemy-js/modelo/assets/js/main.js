const res = document.querySelector('div.resultado');

let peso = document.querySelector('input#peso');
let altura = document.querySelector('input#altura');


function calcularImc() {
    let peso = Number(peso.value);
    let altura = Number(altura.value);
    let calImc = peso / (altura * altura);

    const imc = calImc.toFixed(2);

    res.innerHTML = `<p>Seu IMC é ${imc}.</p>`

    if (imc <= 16) {
        res.innerHTML += `<p>Subpeso Severo!</p>`
    } else if (imc > 16 && imc <= 18.4) {
        res.innerHTML += `<p>Subpeso!</p>`
    } else if (imc >= 18.5 && imc <= 25) {
        res.innerHTML += '<p>Normal.</p>'
    } else if (imc > 25.5 && imc <= 40) {
        res.innerHTML += '<p>Sobrepeso!</p>'
    }
}