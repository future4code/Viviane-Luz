/*Interpretação de código
 1. Fazendo um programa que calcula a soma
 console 105
*/

/*Interpretação de código
 2. a. Imprimindo os números pares no console, pega um item da lista e imprime um novo array
 b. [10, 15, 25, 30]
 c. se num fosse 3 [19, 21, 23, 27] se num fosse 4 o resultado seria = 12
*/

//Escrita de código 3
//a.
let arrayOriginal = [2, 4, 10, 25, 33, 120]

let numeroMaior = arrayOriginal[0]
let numeroMenor = arrayOriginal[0]
for(let i = 0; i <=6; i++){
    const elemento = arrayOriginal[i]
    if(elemento > numeroMaior){
        numeroMaior = elemento
    }else if(arrayOriginal <= numeroMenor)
        numeroMenor = elemento
    }

console.log("O maior número é " + numeroMaior)
console.log("O menor número é " + numeroMenor)

//b.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let divisao = []
// let array = arrayOriginal /10
for (let num of arrayOriginal){
    divisao.push(num / 10)
}
console.log(divisao)

//c.
let arrayOriginal = [7, 30, 14, 21, 40, 33, 21, 19, 55]

for(let i = 0; i <= 9; i++){
    if(i % 2 === 0){
        console.log(`${i} É par`)
    }
}
console.log(arrayOriginal)

//d.
let numeros = [11, 13, 18, 20, 8, 30, 10]
for (let i=0; i < 7; i++){
    console.log(`O elemento do index `+ [i] + " é " + numeros [i])
}




