function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var intervalo = document.getElementById('txtint')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var t = Number(intervalo.value)
        if (t <= 0) {
            alert('Intervalo invalido! Considerando INTERVALO 1')
            t = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += t) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = i; c >= f; c-= t) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}