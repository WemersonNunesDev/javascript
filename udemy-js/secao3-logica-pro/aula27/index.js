// Operação Ternária
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUser = 500;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUser = 'Blue';
const corPadrao = corUser || 'Preto';

console.log(nivelUser, corPadrao);
