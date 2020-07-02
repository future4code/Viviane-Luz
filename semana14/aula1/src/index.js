// // console.log("hello world")
function operacao(number1, number2) {
    var resultado = {
        soma: number1 + number2,
        sub: number1 - number2,
        mult: number1 * number2,
        maior: (number1 > number2 ? number1 : number2)
    };
    return "a soma \u00E9 " + resultado.soma + ", a sub \u00E9 " + resultado.sub + ", a mult \u00E9 " + resultado.mult;
}
console.log("Resultado", operacao(2, 4));
// // dentro da função usar dois pontos : e identificar que é number 
// const resultSum: number = sum(4, 2);
// console.log("Resultado da soma", resultSum);
// // Função de soma
// function sub(number1:number, number2:number) : number {
//     return number1 -  number2
// }
// const resultSub: number = sum(4, 2);
// console.log("Resultado da subtração", resultSum);
// // Função de subtração
// function mut(number1:number, number2:number) : number {
//     return number1 * number2
// }
// const resultMut: number = mut(4, 2);
// console.log("Resultado da mutiplicação", resultSum);
// // Função de mutiplicação
// function maior(number1:number, number2:number) : number {
//     if(number1 === 4)
//     return (number1);
// }
// console.log("É número maior")
