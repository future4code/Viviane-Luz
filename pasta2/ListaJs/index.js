//Interpretação de código:
/*
1.Faz a conversão de meoda em programa de js, em que o usuário digita o valor da contação no dia.
e retorna o valor me dinheiro.

2.É um programa em switch, que faz a conversão em investimento
3. Imprime a quantida de numeros par e o tamanho do array
*/

/*Exercícios de Lógica de Programação
1. Pode ser feito através do while, for of e for in. 
*/
let numeros = [2, 7, 9, 13, 21, 28, 30, 35, 50]
for(let i =0; i<5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}
/* 2.
a. True
b.False
c.True
d.false
e.false*/

//3 Não funciona, porque o código está incompleto e entraria em loop infinito.

//4
let triangulo = (a, b, c) => {
   if(a === b && b === c){
    return "Triângulo Equilátero"
   }else if(a !== b && b !== c && c !== a){
    return "Triângulo Escaleno" 
    }else{
    return "Triângulo Isóceles"
   }  
}   
console.log(triangulo(1, 2, 3)) 
    
//i.
primeiroNumero = 30
segundoNumero = 15
if(primeiroNumero > segundoNumero){
    console.log("O maior é:" + " " + 30)
}
//ii.
primeiroNumero = 15
segundoNumero = 30

if(primeiroNumero % 2){
    console.log(30 + " " +  "É divísvel por" + "" + 15)
}else{
    console.log(15 + " " + "Não é divisível por " + 30 )
}
//iii.
primeiroNumero = 30
segundoNumero = 15
if(primeiroNumero !== segundoNumero){
    console.log("A diferença entre eles é:" + " " + 15)
}

//Exercícios de Funções
//1.
let arrayNumeros = [2, 4, 10, 25, 33, 120]

let numeroMaior = arrayNumeros[0]
let numeroMenor = arrayNumeros[0]
for(let i = 0; i <=6; i++){
    const elemento = arrayNumeros[i]
    if(elemento > numeroMaior){
        numeroMaior = elemento
    }else if(arrayNumeros <= numeroMenor)
        numeroMenor = elemento
    }

console.log("O maior número é " + numeroMaior)
console.log("O menor número é " + numeroMenor)

//2.
function labenu (){
    alert("Hello Labenu ;)")
}
labenu()

//- Exercícios de Objetos
//1. São vários valores guardados dentro de uma array e dados
// e quando queremos acessar um valor dentro do objeto.

//2.

//3.
const filme = {
    titulo: 'A origem',
    ano: 2010,
    diretor: 'Christopher Nolan',
    atores: ['Leonardo Di Caprio', 'Ellen Page'],
    ator1: 'Leonardo Di Caprio',
    atriz2: 'Ellen Page',
    meuFilmePreferido: true
  }

 console.log(filme)
 console.log('Leonardo Di Caprio', filme.ator1[13]);
 console.log("Venha assitir ao filme" + ano + "dirigido por " + diretor + " " + "e estrelado por" + ator1);
  
//4
const anonimizarPessoa = {
   nome: "anonimo",
   idade: 30,
   email: "labenu@gmail.com",
   endereco: "Marcondes de Andrade",
    }
    
console.log(anonimizarPessoa)
    