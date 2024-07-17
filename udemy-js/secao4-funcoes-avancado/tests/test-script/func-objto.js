const calImc = 115 / (1.87 ** 2);

const pessoa = {
    nome: () => console.log('Meu nome é Wemerson'),
    idade: () => console.log('Tenho 24 anos'),
    altura: () => console.log('Tenho 1.87 de altura'),
    imc: () => console.log(`Meu IMC é de ${calImc.toFixed(2)}`)
}

pessoa.nome();
pessoa.idade();
pessoa.altura();
pessoa.imc();
