
// EXERCÍCIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console? 

    // let sum = 0
    // for(let i = 0; i < 15; i++) {
    //   sum += i
    // }
    // console.log(sum)
    // R- 105

    
    // EXERCÍCIO 2
    
    // Leia o código abaixo:
    
    //     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    //     const novaLista = []
    //     const numero = 3
    //     for(const item of lista){
    //       if(item%numero === 0) {
    //         novaLista.push(item)
    //       }
    //     }
    //     console.log(novaLista)
    
    // // a. O que o comando `.push` faz?
    // // adiciona um elemento em uma lista de 5.
    
    // b. Qual o valor impresso no console?
    // (4) [10, 15, 25, 30]
    
    // c. Qual seria imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?

//     DESAFIO:
    
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//     let linha = ""
//     for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// 0
// index.js:42 00
// index.js:42 000
// index.js:42 0000


const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = numeros [0]
for (let i = 0; i < numeros.length; i++){
    const elemento = numeros [i]
    if(elemento > maior){
        maior = elemento
    }
}
console.log(maior)


// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let menor = numero [1]
// for (let i = 1; i > numero.length; i++){
//     const elemento = numero [i]
//     if(elemento < menor){
//         menor = elemento
//     }
// }
// console.log(menor)


