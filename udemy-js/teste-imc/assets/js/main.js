let altura = document.querySelector('input#altura');
let peso = document.querySelector('input#peso');

const res = document.querySelector('div.resultado');

function calcular() {
    let nomeS = String(nome.value);
    let idadeN = Number(idade.value);
    let alturaN = Number(altura.value);
    let pesoN = Number(peso.value);

    const imcCalculo = pesoN / (alturaN * alturaN);

    const imc = imcCalculo.toFixed(2);

    const imcIdeal = 25;
    const diferncaDePeso = (pesoN * imcIdeal) / imc;
    const pesoIdeal = diferncaDePeso.toFixed(0)
    //precisa perder xKgs
    // sobrePeso x imcIdeal / imcAtual

    res.innerHTML =
        `
    <p>Nome: ${nomeS}, de ${idadeN} anos.</p>
    `

    if (imc >= 18.5 && imc <= 25) {
        res.innerHTML +=
            `
        <p>Seu IMC é ${imc}. Seu status é: <strong>NORMAL</strong></p>

        `
    } else if (imc >= 16 && imc < 18.5) {
        res.innerHTML +=
            `
        <p>Seu IMC é ${imc}. Seu status é: <strong>SUBPESO</strong></p>
        <p>Seu peso ideal é de <strong>${pesoIdeal}kgs</strong></p>
        `
    } else if (imc < 16) {
        res.innerHTML +=
            `
        <p>Seu IMC é ${imc}. Seu status é: <strong>SUBPESO SEVERO!</strong></p>
        <p>Seu peso ideal é de <strong>${pesoIdeal}kgs</strong></p>
        `
    } else if (imc > 25 && imc < 40) {
        res.innerHTML +=
            `
        <p>Seu IMC é ${imc}. Seu status é: <strong>SOBREPESO</strong>!</p>
        <p>Seu peso ideal é de <strong>${pesoIdeal}kgs</strong></p>
        `
    } else if (imc > 40) {
        res.innerHTML +=
            `
        <p>Seu IMC é ${imc}. Seu status é: <strong>SOBREPESO SEVERO</strong>!</p>
        <p>Seu peso ideal é de <strong>${pesoIdeal}kgs</strong></p>
        `
    }
}
