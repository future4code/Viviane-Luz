function operacao(arrayDeNumeros) {
    const valor = {
        quantidadeTotal: arrayDeNumeros.length,
        quantidadeImpares: (arrayDeNumeros.filter(cadaNumero => cadaNumero % 2 !== 0).length),
        somaTotal: arrayDeNumeros
    };
    return `operacao, a quantidade total é ${quantidadeTotal} e o total de numeros impares é ${quantidadeImpares}`;
}
console.log(operacao([2, 4, 5, 9]));
//# sourceMappingURL=index2.js.map