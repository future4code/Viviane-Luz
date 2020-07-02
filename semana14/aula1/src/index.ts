// // console.log("hello world")
// // dentro da função usar dois pontos : e identificar que é number 

function operacao(number1:number, number2:number) : any {
    let resultado: {
        soma: number, 
        sub: number, 
        mult: number,
        maior: number
    }=
    {
        soma: number1 + number2, 
        sub:  number1 - number2,
        mult: number1 * number2,
        maior: (number1 > number2 ? number1: number2)
    }
    return `a soma é ${resultado.soma}, a sub é ${resultado.sub}, a mult é ${resultado.mult}`
 
}
 
console.log("Resultado", operacao(2,4));

// tsc puro transpila, transforma o código para o computador/ tsc o nome do arquivo
// ➜  src git:(viviane) ✗ tsc index.ts
// ➜  src git:(viviane) ✗ node index.js
// Resultado a soma é 6, a sub é -2, a mult é 8






