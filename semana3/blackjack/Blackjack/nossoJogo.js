import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem vindo ao jogo de Blackjack!")

if(confirm("Que iniciar o jogo?")) { 
   if(jogador === "s"){
      console.log("true")
   }else{ (jogador === "n")
       console.log("o jogo acabou")
 }
}

if(confirm("Que iniciar o jogo?")) { 
   if(jogador === "s"){
      console.log("inicie uma rodada")
   }


   // comprar uma carta

function comprarCarta() {
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   console.log("K♦️") 
}
 
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { 
     valor = Number(numero)
   }
 
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }
 
 export default comprarCarta

 if(confirm("Quer iniciar uma nova rodada?"))
 let usuario = 0;
 let carta = 0;
 for(let i = 0; i < 2; i ++){
    carta = comprarCarta 
    usuario = valor

 }

 let computador = 0;
 let carta = 0;
 for( let i = 0; i < 2; i++){
    carta = comprarCarta
    usuario = valor
 }
 console.log("carta", "usuario", "valor")
if(usuario > computador){
   console.log("usuario ganhou!")
}else if(usuario < computador){
   console.log("computador ganhou!")
}else{
   console.log("empatou")
}




//  DESAFIO
a.

const usuario = prompt("escolha uma carta")
if(usuario === "A"){
    console.log("sortei novamente")
}










    
 






   
    













    
    















   