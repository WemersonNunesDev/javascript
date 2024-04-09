let numero = [2, 9, 4, 7, 1]

for(let pos=0; pos<numero.length; pos++) {
    console.log(`A posição ${pos} tem o elemento ${numero[pos]}`)
}

for(let pos in numero) {
    console.log(`A posição ${pos} tem o elemento ${numero[pos]}`)
}