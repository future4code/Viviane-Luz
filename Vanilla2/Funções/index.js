/*Interpretação de código Exercício 1
a. Um array vazio
b. 
*/

//Exercício2

/*
a. console: 0, 2 retornou o index 1 e o index 2
b.

*/

//Exercício3 console: Undefined

//Exercício4

//a.
function idadeDoCachorro(idadeHumano) {
    let resultado = idadeHumano * 7;
    return resultado;
}
console.log(idadeDoCachorro(4))

//b.
function informacoesDaPessoa(Nome, Idade, Endereco, Estudante){
    if(Estudante){
        return "Oi eu sou " + Nome + " " + "tenho" + " " + Idade + " " + "anos " + "Moro em " + Endereco + " e sou estudante "
    }else{
        return "Oi eu sou " +  Nome + " " + "tenho" + " " + idade + "anos " + "Moro em " + Endereco + " e não sou estudante "
    }
}

let dados = informacoesDaPessoa("Goli", 23, "Guararapari 190", true)
console.log(dados)


 //Exercício6
//a
function arrayNumeros(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
    return array.length
}

 let numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22] 
 const resultado = arrayNumeros(numeros)
 console.log("O tamanho do array é", resultado)

//b
function verifaPar(numero){
    if(numero % 2 ===0){
        return "É par"
    }else{
        return "É impar"
    }
}

const resultado = verifaPar(8)
console.log(resultado)

//c
function quantidadePar(numero){
    if(numero % 2 ===0){
    return "Par"
        
    }
}

 let numeros = [2, 4, 6, 8] 
 const resultado = quantidadePar(numeros)
 console.log("Quantidade par", resultado)



