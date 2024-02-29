function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('img', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/bebe-menino.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-homem.jpg')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/homem-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', './imagens/homem-velho.jpg')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/bebe-menina.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-mulher.jpg')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/mulher-adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', './imagens/mulher-velha.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}