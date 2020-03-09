// ### Enunciado

// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// Leia o código abaixo:

//     const minhaFuncao = (quantidade) => {
//     	const array = []
//     	for(let i = 0; i < quantidade; i+=2) {
//     			for(let j = 0; j < i; j++) {
//     				array.push(j)
//     			}
//     	}
//     	return array
//     }

// a. 0
// b.6 []
// c. 



// EXERCÍCIO 2
// a.
// 0
// 2
// undefined
// undefined

// b.Sim, porque imprime cada elemento e devolve a quantidade  dentro de escopo de uma lista.

// EXERCÍCIO 3
// function myFunction(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

  EXERCÍCIO 4








Exercício 6

// a.
// function imprimeLista(){
//     for(let elemento of array){
//         console.log(elemento)
//     }
//         return array.length
// }
// imprimeLista([10, 23, 45, 78, 90, 52,])

// b. 
// let minhaFuncao = (numero)=>{
//     if(numero % 2 === 0){
//         return "par"
//     }else{
//         return "ímpar"
//     } 
// }
// console.log(minhaFuncao(2))