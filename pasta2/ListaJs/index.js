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
//1. São vários valores guardados dentro de um array e quando queremos acessar um valor dentro do objeto.

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
const nomePessoa = {
    nome: "Viviane",
    idade: 30,
    email: "labenu@gmail.com",
    endereco: "Marcondes de Andrade",
}

const anonimizarPessoa = {
   nome: "anonimo",
   idade: 30,
   email: "labenu@gmail.com",
   endereco: "Marcondes de Andrade",
    }
    
const anonimizarPessoa = nomePessoa.map((nomePessoa, index, array) => {
    return {
       nome: anonimizarPessoa.nome
    } 
})

console.log(anonimizarPessoa);

const pessoa = {
    nome: 'Maria',
    idade: 20,
    email: 'maria@gmail.com',
    endereco: 'Rua do Comercio, 21'
}

anonimizarPessoa = (pessoa) => {
    return anonimo = {
        ...pessoa,
        nome: 'Anônimo',
    }
}

const pessoaAnonima = anonimizarPessoa(pessoa);
console.log(pessoaAnonima);
//

//Exercícios de Funções de array
//a.
const pessoas = 
[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
const idadeMaiorQueVinte = pessoas.filter((pessoa, index, array) => {
    if(pessoa.idade > 20){
        return {
            nome: pessoa.nome,
            idade: pessoa.idade
        }
    }
    return false
})

console.log(idadeMaiorQueVinte)

//b.
const criancas = 
[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const retornaCriancas = criancas.filter((crianca, index, array) => {
    if(crianca.idade < 20){
        return {
            nome: crianca.nome,
            idade: crianca.idade
        }
    }
    return false
})

console.log(retornaCriancas)

//3 
//a.

let arrayTeste = [1, 2, 3, 4, 5, 6]

let multiplicaArray = arrayTeste.map((arrayTeste, index, array) => {
    return arrayTeste * 2;
})
console.log(multiplicaArray)

//b

let arrayTeste = [1, 2, 3, 4, 5, 6]

let multiplicaArray = arrayTeste.map((arrayTeste, index, array) => {
    return arrayTeste * 3;
})
console.log(`${multiplicaArray}`)

//c.

let numeros = [1, 2, 3, 4, 5, 6]

let array = numeros.map((numeros, index, array) => {
    if(numeros % 2 === 0){
        console.log(`${numeros} é par`)
    }else{
        console.log(`${numeros} é impar`)
    }

})
console.log(numeros)

//3 a.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permissao = pessoas.filter((pessoa, index,array) => {
if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura <= 1.5){
    return {
        nome: pessoa.nome,
        idade: pessoa.idade,
        altura: pessoa.altura
    }
}
})
console.log(permissao)

//b.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const naoPodeEntrar = pessoas.filter((pessoa, index, array) => {
    if(pessoa.idade <= 14 || pessoa.idade >= 60){
        return {
            pessoa
        }
    }
})

console.log(naoPodeEntrar)
//

