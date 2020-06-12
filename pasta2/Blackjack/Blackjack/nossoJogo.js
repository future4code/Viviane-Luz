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

if(confirm("Quer iniciar uma nova rodada?")){
   (resposta === "s")


const usuario = comprarCarta();
const cartaUsuario = comprarCarta();
const cartaComputador = comprarCarta();
const computador = comprarCarta();

const somaUsuario = usuario.valor + cartaUsuario.valor 
const somaComputador = computador.valor + cartaComputador.valor
console.log("Usuário - cartas: ", usuario.texto, cartaUsuario.texto, " - pontuação ", (somaUsuario));
console.log("Computador - cartas: ", cartaComputador.texto, computador.texto, " - pontuação " , (somaComputador));

// Tem alguma forma de acessar o valor, diferente do exemplo acima, para acessar o valor da carta?

// let carta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// for(let i =0; i<= 2; i++){
//    if(i === "K♦️"){
//       console.log("K♦️" + 10) 
//    }
// }

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
























