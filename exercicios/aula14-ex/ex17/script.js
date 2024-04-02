function tabuada() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    }else{
        var num = Number(numero.value)
        let c = 1
        tab.innerHTML = ``
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}