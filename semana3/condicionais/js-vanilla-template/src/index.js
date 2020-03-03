// Exercícios de interpretação de código
// EXERCÍCIO 1:
// Testa se o número é par, porque todos os números par é divisivel por 2.
// sao para numeros impares.
// 

// EXERCÍCIO 2
/*
a.Serve para simplificar e tornar o código mais limpo.

b. console.log("o preço da fruta", fruta, "é", "RS", Preco) 
o preço da fruta Maça é R$ 2.25 


c. R$ 24.55

d. O preço da fruta  pera  é  R$  5

*/

/* EXERCÍCIO3


*/


// EXERCÍCIO 4

// a. console.log("o primeiro é igual ao segundo numero")

 const numeroPrimeiro = Number(prompt("digite o numero primeiro"))
 const numeroSegundo = Number(prompt("digite o numero segundo"))

if(numeroPrimeiro === numeroSegundo){
     console.log("o primeiro é igual ao segundo numero")
 }
 if(numeroPrimeiro > numeroSegundo){
    console.log(numeroPrimeiro, numeroSegundo)
    } 
 if(numeroPrimeiro < numeroSegundo){
    console.log(numeroSegundo, numeroPrimeiro)
 }



// b. console.log("todos os numeros sao iguais")

 const numeroPrimeiro = Number(prompt("digite o numero primeiro"))
const numeroSegundo = Number(prompt("digite o numero segundo"))
 const numeroTerceiro = Number(prompt("digite o terceiro numero"))
    
 if(numeroTerceiro === numeroSegundo && numeroSegundo === numeroPrimeiro){
     console.log("todos os numeros sao iguais")
 }
else if(numeroPrimeiro === numeroSegundo){
      console.log("o primeiro e igual ao segundo numero")
 }
 else if(numeroPrimeiro > numeroSegundo && numeroSegundo > numeroTerceiro){
    console.log(numeroPrimeiro, numeroSegundo, numeroTerceiro)
     } 
 else if(numeroPrimeiro > numeroTerceiro && numeroTerceiro > numeroSegundo){
     console.log(numeroPrimeiro, numeroTerceiro, numeroSegundo)
 }
 else if(numeroSegundo > numeroPrimeiro && numeroPrimeiro > numeroTerceiro){
    console.log(numeroSegundo, numeroPrimeiro, numeroTerceiro)
 }
 else if(numeroSegundo > numeroTerceiro && numeroTerceiro > numeroPrimeiro){
     console.log(numeroSegundo, numeroTerceiro, numeroPrimeiro)
 }
 else if(numeroTerceiro > numeroPrimeiro && numeroPrimeiro > numeroSegundo){
     console.log(numeroTerceiro, numeroPrimeiro, numeroSegundo)
 }
 else if(numeroTerceiro > numeroSegundo && numeroSegundo > numeroPrimeiro){
     console.log(numeroTerceiro, numeroSegundo, numeroPrimeiro)
 }

// c.

 const numeroPrimeiro = Number(prompt("digite o numero primeiro"))
 const numeroSegundo = Number(prompt("digite o numero segundo"))
 const numeroTerceiro = Number(prompt("digite o terceiro numero"))
    
 if(numeroTerceiro === numeroSegundo && numeroSegundo === numeroPrimeiro){
    console.log("digite ao menos um numero diferente")
 }


// Exercício 5
a.https://drive.google.com/file/d/1Hc01RqCKdIzgHmbbLmfVv9XreBL4NxEz/view?usp=sharing

b.
const ossos = prompt ("Possui ossos s/n?")
const pelo = prompt("Possui pelo s/n?")
const penas = prompt("Possui penas s/n?")
const aquatico = prompt("Vive em ambiente aquático s/n?")
const terrestre = prompt("Vive em ambiente terrestre s/n?")
const sempreAquatico = prompt("Vive sempre em ambiente aquatico? s/n")

    if(ossos === "n"){
        console.log("invertebrado")
    }
    if (pelo === "n"){
    if (penas ==="s"){
        console.log("ave")

    }
    }






































    
