// aula 46 - setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br');
}

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);


setTimeout(function() {
    clearInterval(timer);
}, 4000);

setTimeout(function() {
    console.log('Olá, mundo!');
}, 5000);
