let dataEhora = new Date();
let hora = `${dataEhora.getHours()}:${dataEhora.getMinutes()}`


if(hora >= 0 && hora <= '11:30') {
    return console.log(`Bom dia! ${hora}h`)
} else if(hora >= '11:31' && hora <= '17:30') {
    return console.log(`Boa tarde! ${hora}h`)
} else if(hora >= '17:31' && hora <= '23:59') {
    return console.log(`Boa Noite! ${hora}h`)
} else {
    return 'Olá!'
}
