const res = document.querySelector('div.resultado');
var tempo = new Date();
var hora = `${tempo.getHours()}:${tempo.getMinutes()}`;
const escrever = `Meu nome é "Wemerson". Estou aprendendo JavaScript às ${hora} da tarde.`

res.innerHTML = `${escrever}`