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

if(confirm("Quer iniciar uma nova rodada?")){
   (jogador === "s")
   console.log("true")
}else{
   console.log("O jogo acabou")

}

const jogador = comprarCarta();
console.log("K♦️" + 10) 

const usuario = comprarCarta();
const usuarioCarta = comprarCarta();
const computador = comprarCarta();
const computadorCarta = comprarCarta();

let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
for(let i =0; i<= 2; i++){
   if(i === "K♦️"){
      console.log("K♦️" ) 

   }
}
console.log("Usuário - cartas: ", carta.Texto, " - pontuação " + usuario);
   console.log("Computador - cartas: ", carta.valor, " - pontuação " + computador);

if (jogador > computador){
   console.log("O usuário ganhou!")
}else if (jogador < computador){
   console.log("O computador ganhou!")
}else if (jogador === computador){
   console.log("Empatou!")
}else {
   console.log("O jogo acabou!!!")
   }

























