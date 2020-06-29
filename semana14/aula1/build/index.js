function operacao(number1, number2) {
    let resultado = {
        soma: number1 + number2,
        sub: number1 - number2,
        mult: number1 * number2,
        maior: (number1 > number2 ? number1 : number2)
    };
    return `a soma é ${resultado.soma}, a sub é ${resultado.sub}, a mult é ${resultado.mult}`;
}
console.log("Resultado", operacao(2, 4));
//# sourceMappingURL=index.js.map