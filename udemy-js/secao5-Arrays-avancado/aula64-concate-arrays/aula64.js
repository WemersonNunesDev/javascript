// Aula 64 - Concatenando Arrays

// First form:
const first = [1, 2, 3];
const second = [4, 5, 6];
// const third = first.concat(second, [7, 8, 9], 'Luiz');

// ...rest -> ...spread
const third = [...first, ...second, ...[7, 8, 9]];
console.log(third);
