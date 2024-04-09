let numero = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é: ${numero}`)

numero[5] = 6
console.log(`Atualizado: ${numero}`)

numero.push(7)
console.log(`Mais um número add: ${numero}`)

numero.length
numero.sort()
console.log(`Agora nossos ${numero.length} elementos ficaram organizados da seguinte forma: ${numero}`)

let pos = numero.indexOf(2)

if(pos == -1) {
    console.log('O elemento não existe dentro do vetor!')
}else{
    console.log(`O elemento 8 está na posição ${pos}`)
}
