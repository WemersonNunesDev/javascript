//  Aula 54 - Funções de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// função de callback - callback hell
f1(f1Callback);

function f1Callback() {
    f2(f2Calback);
}
function f2Calback() {
    f3(f3Calback);
}

function f3Calback() {
    console.log('Olá, mundo');
}
