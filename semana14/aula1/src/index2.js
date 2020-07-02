// const array: number[] = [1 ,2, 3];
// const arr: Array<number> = [];
function operacao(arrayDeNumeros) {
    var valor = {
        quantidadeTotal: arrayDeNumeros.length,
        quantidadeImpares: (arrayDeNumeros.filter(function (cadaNumero) { return cadaNumero % 2 !== 0; }).length)
        // somaTotal: arrayDeNumeros
    };
    return "operacao, a quantidade total \u00E9 " + quantidadeTotal + " e o total de numeros impares \u00E9 " + quantidadeImpares;
}
console.log(operacao([2, 4, 5, 9]));
