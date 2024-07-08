try {
    // É executado quando NÃO HÁ ERROS
    console.log(a)
    console.log('Abrindo arquivo');
    console.log('Manipulando arquivo');
    console.log('Fechei o arquivo');
} catch (e) {
    // É executado quando HÁERROS
    console.log('Deu error')
} finally {
    // Sempre é executado
    console.log('FINALLY: Sempre serei executado.')
}
