// Aula 77 - Validando CPF
// 705.484.450-52  070.987.720-03

/* 
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
resultado > 9 = 0

7x   0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 284

11 - (284 % 11) = 5 (Primeiro digito)

*/

function ValidaCpf (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: () => cpfEnviado.replace(/\D+/g, '')
    });
}

const cpf = new ValidaCpf('705.484.450-52');
console.log(cpf);