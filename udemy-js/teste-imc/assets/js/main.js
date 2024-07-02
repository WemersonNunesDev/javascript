let peso = document.querySelector('input#peso');
let altura = document.querySelector('input#altura');

const res = document.querySelector('div.resultado');

let calcular = document.querySelector('button#btn-calcular');

calcular.addEventListener('click', () => {
    let pesoX = Number(peso.value);
    let alturaX = Number(altura.value);

    const imcCalc = pesoX / (alturaX * alturaX);
    const imc = imcCalc.toFixed(2);

    const imcIdeal = 25;
    const diferncaDePeso = (pesoX * imcIdeal) / imc;
    const pesoIdeal = diferncaDePeso.toFixed(0)

    res.innerHTML = `Seu IMC é de ${imc}.`

    if(imc >= 16 && imc <= 18.4) {
        res.innerHTML += ` <strong>Subpeso</strong>. Seu peso ideal é ${pesoIdeal}kg`
    } else if(imc >= 18.5 && imc <= 25) {
        res.innerHTML += ' <strong>Normal</strong>.'
    } else if(imc >= 25.5 && imc <= 40) {
        res.innerHTML += ` <strong>Sobrepeso</strong>. Seu peso ideal é ${pesoIdeal}kg`
    }
})