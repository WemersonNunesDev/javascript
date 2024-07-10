//  Aula 52 - Escopo Léxico

const nome = 'Luiz';

function sayName() {
    console.log(nome);
}

function useSayName() {
    // const nome = 'Thiago'; -> a função lembra de seus vizinhos qur por sua vez não interfere neste caso.
    sayName();
}

useSayName();
