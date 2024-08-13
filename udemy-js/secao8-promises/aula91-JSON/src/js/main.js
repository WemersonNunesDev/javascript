fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaEleemntosNaPagina(json));

function carregaEleemntosNaPagina(json) {
    const table = document.createElement('table');
    for(let pesoa of json) {
        const tr = 
    }
}