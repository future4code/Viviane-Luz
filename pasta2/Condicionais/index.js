/*Exercícios de interpretação de código*/
/*Exercício 1.
Realiza um programa que o usuário coloca um valor númerico e
identifica se o número é par ou impar.
Passou no teste se é par, se o resto da divisão for zero.
Não passou no teste se o numero for par, se o resto da divisão houve sobra.
*/

/*Exercício 2.
a. Deixar o código menos verboso e mais simples, indicando as condições.
b. O preço da fruta "Maçã" é R$ 2.25
c. $ 24.55
d. O preço da fruta Pêra é R$ 5, porquê entraria direto no Default, caso tirasse o break.
*/

/*Exercício 3.
a. is not defined, porque 0 não tem como ser maior que numero 1
*/

//Exercício 4.

//a.
let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")
if (primeiroNumero > segundoNumero) {
    console.log("primeiroNúmero, segundoNúmero")
}else{
    console.log("Nao imprime")
}

//b.
let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")
let terceiroNumero = prompt("Digite o terceiro número:")

if (primeiroNumero === segundoNúmero && terceiroNumero === primeiroNúmero) {
     console.log("O primeiro número é igual ao segundo")
}

//c.
let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")
let terceiroNumero = prompt("Digite o terceiro número:")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
terceiroNumero = Number(terceiroNumero)
if(terceiroNumero === segundoNumero && segundoNumero === primeiroNumero){
    console.log("Digite números diferentes")
}

//Exercício 5
const animal = prompt("Possui ossos s /n?")
if(animal === "s"){
    console.log("vertebrado")
}else{
    console.log("Invertebrado")
}

const animal = prompt ("Possui Pêlos? s /n?")
const animal = "Possui Pêlos"

if(animal === "s"){
    console.log("É um mamífero não humano")
}else{
    console.log("É uma ave")
}

const animal = "Não possui penas"
if(animal === "Não ossui penas"){
    console.log("Éle é um animal terrestre")
}else{
    console.log("É um peixe")
}

const animal = "É terrestre"
if(animal === terrestre){
console.log("Ele pode ser um anfíbio ou um réptil")
}else{
    console.log(" Será o segundo Réptil")
}

//b.
const animalOssos = prompt("Possui ossos s/n?")
const animalPêlo = prompt("Possui pêlo s/n?")
const animalPenas = prompt("Possui penas s/n?")
const animalAquático = prompt("Vive em ambiente aquático s/n?")
const animalTerrestre = prompt("Vive em ambiente terrestre s/n?")
const animalSempreAquatico = prompt("Vive sempre em ambiente aquatico? s/n")
     if(ossos === "n"){
        console.log("invertebrado")
    }
    if (pelo === "n"){
     if (penas ==="s"){
        console.log("ave")
     }
    }
    




