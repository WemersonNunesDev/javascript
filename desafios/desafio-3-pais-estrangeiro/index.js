var txtr = document.querySelector('input#txtpais')
var regist = document.querySelector('div#reg')
var pais = textpais.value

function nacionalidade(){
    regist.innerHTML = `<p>Atualmente você vive em ${pais}</p>`
    if(pais != 'Brasil'){
        regist.innerHTML += 'Você foi pego pela migração'
    }else{
        regist.innerHTML = `Você é brasileiro!!`
    }
}