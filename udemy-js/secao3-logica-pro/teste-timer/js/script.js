// Exercício - Criando um Timer

function cronometro() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            timeZone: 'GMT'
        });
    }
    
    const res = document.querySelector('.resultado');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            res.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const elemento = e.target;
    
        if (elemento.classList.contains('zerar')) {
            res.classList.remove('pausado');
            clearInterval(timer);
            res.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if (elemento.classList.contains('iniciar')) {
            res.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if (elemento.classList.contains('pausar')) {
            res.classList.add('pausado');
            clearInterval(timer);
        }
    })
}

cronometro();
