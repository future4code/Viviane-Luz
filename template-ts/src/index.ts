import * as fs from 'fs'

//Para acessar os comandos npm start, e argv e a posição do array

//a)
const pessoa: string = process.argv[2]
const idade: number = Number(process.argv[3])
console.log('Olá', pessoa, idade, 'seja bem vinda')

//b)
const nome: string = process.argv[2]
const age: number = Number(process.argv[3])
console.log('Olá', nome,'você tem', age, 'anos', 'e em sete anos você terá', age + 7, 'anos')

//console: Olá viviane você tem 30 anos e em sete anos você terá 37 anos

const operacao: string = (process.argv[2])
const primeiroNumero: number = Number(process.argv[3])
const segundoNumero: number = Number(process.argv[4])

function sum(operacao: string, primeiroNumero: number, segundoNumero: number): any {
    switch(operacao){
        case "soma":
            return primeiroNumero + segundoNumero
            case "sub":
                break
    }
}

 console.log(sum(operacao, primeiroNumero, segundoNumero))


 function criarTarefa(tarefa: string): void {
     const fileName: string = 'tarefas.txt'
     const fileText: string = fileBuffer.toString()//não entendi porque deu esso erro
     const tarefas: string[] = JSON.parse(fileText)

     const novaTarefa: string = process.argv[2]

     tarefas.push(novaTarefa)
     
     fs.appendFileSync("tarefas.txt", " ")
     console.log(tarefas)

 }

 criarTarefa(" ")
