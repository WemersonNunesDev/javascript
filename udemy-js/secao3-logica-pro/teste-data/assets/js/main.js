const res = document.querySelector('div.resultado');
const data = new Date();

// const option = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
// res.innerHTML = data.toLocaleDateString('pt-BR', option);
// console.log(data.toLocaleDateString('pt-BR', option));

function addZeroLeft(num) {
    return num >= 10 ? num : `0${num}`
}

function getWeek(diaDaSemana) {
    const daysWeeke = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return daysWeeke[diaDaSemana];
}

function addMonth(mes) {
    const listaMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return listaMeses[mes];
}

function postData(data) {
    const diaDaSemana = data.getDay();
    const mes = data.getMonth();

    const dayWeekText = getWeek(diaDaSemana);
    const newMonth = addMonth(mes);

    return (`${dayWeekText}, ${data.getDate()} de ${newMonth} de ${data.getFullYear()} - ${addZeroLeft(data.getHours())}:${addZeroLeft(data.getMinutes())}h`);
}

res.innerHTML = postData(data);
