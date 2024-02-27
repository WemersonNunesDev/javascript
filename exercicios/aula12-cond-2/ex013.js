var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log(`${diaSem} - Domingo`)
        break
    case 1:
        console.log(`${diaSem} - Segunda`)
        break
    case 2:
        console.log(`${diaSem} - Terça`)
        break
    case 3:
        console.log(`${diaSem} - Quarta`)
        break
    case 4:
        console.log(`${diaSem} - Quinta`)
        break
    case 5:
        console.log(`${diaSem} - Sexta`)
        break
    case 6:
        console.log(`${diaSem} - Sábado`)
        break
    default:
        console.log('[ERRO] Dia invalido')
}