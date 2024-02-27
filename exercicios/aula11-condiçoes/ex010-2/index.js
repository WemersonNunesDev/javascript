function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var resto = document.querySelector('div#resto')
    var velocidade = Number(txtv.value)

    resto.innerHTML = `<p>Sua velocidade atual é ${velocidade}Km/h</p>`

    if (velocidade > 60) {
        resto.innerHTML += `<p>Seu carro está acima da velocidade permitida. MULTADO!!!</p>`
    }else{
        resto.innerHTML = `<p>Você está dentro da velocidade permitida.</p>`
    }
    resto.innerHTML += `<p>Dirija sempre com o cinto de segurança.</p>`
}