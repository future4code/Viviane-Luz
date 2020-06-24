//console.log("Hello world!!")

//A)
 let minhaString: string = 13
//Expected que fosse um number. 

//B) 
 let  minhaString: string  | number = '8'
 console.log(minhaString)

//C)
type pessoa = {
    name: string,
    age: number,
    favouriteColour: string
}

const viviane: pessoa = {
    name: "Viviane",
    age: 30,
    favouriteColour: "Blue"

    }

console.log()

enum cores {
    AZUL = "AZUL",
    VERDE = "VERDE",
    ROSA = "ROSA",
    AMARELO = "AMARELO",
}

type coresArcoIres = {
    class: cores
}

const azul: coresArcoIres = {
    class: cores.VERDE
}

//2

function operacao(number1: number, number2:number): any {
    let resultado: {
        soma: number,
        sub: number,
        mult: number,
        maior: number
    }=
{
    soma: number1 + number2,
    sub: number1 - number2,
    mult: number1 * number2,
    maior: (number1 > number2? number1: number2)
}
return `a é ${resultado.soma}, a sub é ${resultado.sub}, a mult é ${resultado.mult}`

}
console.log("Resultado", operacao(9, 6))

