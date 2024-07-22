const pessoa = new Object();

pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Otávio';
pessoa.idade = 24;

// delete pessoa.nome;
console.log(pessoa);

pessoa.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa.getBournDate = function() {
    const nowDate = new Date();
    return nowDate.getFullYear() - this.idade;
}

console.log(pessoa.falarNome());
console.log(pessoa.getBournDate());

for(let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}
