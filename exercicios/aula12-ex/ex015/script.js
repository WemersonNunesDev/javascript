function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados informados novamente')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './imagens/bebe-menino.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagens/jovem-homem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './imagens/homem-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', './imagens/homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if(idade >=0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}