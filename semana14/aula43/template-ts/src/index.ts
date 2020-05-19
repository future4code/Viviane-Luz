const operacao: string = (process.argv[2])
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);
//  fiz uma constante que recebe numero e string, o argumento process.argv[]
//  abaixo uma função com soma e a operação
function sum(operacao: string, number1: number, number2: number) : any {
  switch(operacao){
    case "soma":
      return  number1 + number2
      case "subt":
        break;

  }
}
console.log(sum(operacao, number1, number2))
//  no console a operacao, numeber 1 e 2.

