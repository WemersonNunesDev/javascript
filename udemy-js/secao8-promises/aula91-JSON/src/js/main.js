axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    const trHead = document.createElement('tr');

    let thNome = document.createElement('th');
    thNome.innerHTML = 'Nome';
    trHead.appendChild(thNome);

    let thIdade = document.createElement('th');
    thIdade.innerHTML = 'Idade';
    trHead.appendChild(thIdade);

    let thSalario = document.createElement('th');
    thSalario.innerHTML = 'Salario';
    trHead.appendChild(thSalario);
    table.appendChild(trHead)

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1)

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2)

        let td3 = document.createElement('td');
        td3.innerHTML = `R$ ${pessoa.salario.toFixed(2)}`;
        tr.appendChild(td3)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}
