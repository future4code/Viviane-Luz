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

console.log("Bem vindo ao jogo de Blackjack!")

const resposta = 0

let usuario = comprarCarta();
let cartaUsuario = comprarCarta();
let cartaComputador = comprarCarta();
let computador = comprarCarta();

if(usuario.texto === "A" && cartaUsuario.texto === "A" || cartaComputador.texto 
=== "A" && computador === "A"){
   console.log("Sortei novamente!")
   usuario = comprarCarta();
   cartaUsuario = comprarCarta();
   cartaComputador = comprarCarta();
   computador = comprarCarta();
}

let somaUsuario = usuario.valor + cartaUsuario.valor 

if(confirm("Quer iniciar uma nova rodada?")){
   (resposta === "s")
   confirm(
      "Suas cartas são " + usuario.texto + cartaUsuario.texto + "A carta revelada do computador é " +
      cartaComputador.texto,
      "\n"+  // \n faz pular a linha
      "Deseja comprar mais uma carta?"
   )
// while(somaUsuario <=21){
//    usuario = comprarCarta();

// }

   confirm(
      "Deseja comprar mais uma carta?" + 
      "Suas cartas são Sua pontuação é "  
   )
if(resposta === "s"){ 
      usuario = comprarCarta(); 
      somaUsuario += usuario.valor     
}

const somaComputador = computador.valor + cartaComputador.valor
console.log("Usuário - cartas: ", usuario.texto, cartaUsuario.texto, " - pontuação ", (somaUsuario));
console.log("Computador - cartas: ", cartaComputador.texto, computador.texto, " - pontuação " , (somaComputador));

if(somaUsuario > somaComputador){
   console.log("O usuário ganhou!")
}else if (somaUsuario < somaComputador){
   console.log("O computador ganhou!")
}else{
   console.log("Empatou!")
}
}else{
   console.log("O jogo acabou")
}

