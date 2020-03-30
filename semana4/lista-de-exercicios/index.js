// Exercícios de Lógica de Programação


// ---EXERCICIO 1

let i = 0
while(i < 8){
console.log(i)
i++
}

for (let i = 0; i < 10; i++){
console.log(i)
}


// ---EXERCICIO 2

// a)False, b) True, c) True,   d)True, e)True


     
// ---EXERCICIO 3

const quantidadeDeNumerosPares = (0, 2, 4, 5, 6, 8)
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
if(i%2 === 0){
    console.log(i)
}
}
// Não funciona, porque a constante não está declarada.

// ---EXERCICIO 4

let triangulo = (a, b, c) => {
    if(a === b && b === c){
        return "Triângulo Equilátero"
    }
    else if(a !== b && b !== c && c !== a){
        return "Triângulo Escaleno" 
     } else{
        return "Triângulo Isóceles"
    }
}
    console.log(triangulo(1, 2, 3)) 


    // ---EXERCICIO 5
let numero = (a, b)=>{

    if(a > b){
    return "O número maior é " + a + " e o número menor é " + b
}
  else if(a < b){
    return "O numero maior é " + b + " o número menor é " + a

    }
    if(a % b === 0){
        return  a + " é divisivel por" + b
    }
    if(b % a !== 0){
        return  b + " não é divisivel por" + a
    }
        return  " a diferença entre eles é " + (a -b)
    }


console.log(numero(30, 15))

// ---EXERCICIO FUNÇÕES 1


let verificaCurso = (curso)=>{
    if(curso === Future4){
        alert("Hello Future4")
    }
}

// ---EXERCICIO DE OBJETOS

// 1. Um array é quando podemos declarar vários elementos dentro de uma variável e pode fazer modelagens em objetos.
     
// 2.EXERCICIO DE OBJETOS

function criaRetangulo (lado1, lado2){
let largura = lado1
let altura = lado2
let perimetro = 2 * lado1 + lado2
let area = lado1 * lado2
console.log("a largura é " + largura + " a altura é " + altura + " o perimetro é " + perimetro + " a area é " + area)

}
// console.log(criaRetangulo(5, 2))

// 3.EXERCICIO DE OBJETOS
const filme ={
    nome: "Inception",
    ano: 2010,
    diretor: "Christopher Nolan",
    atores: ["Leonardo di Caprio", "Ellen Page", "Tom Hard"],

};
console.log(filme);

// Não consegui concatenar

// 4.EXERCICIO DE OBJETOS
const pessoa ={
    nome: "Francisco",
    idade: 40,
    email: "francisco@gmail.com",
    endereco: "Rua Carlos Gomes",
}
console.log(pessoa)

const anonimizarPessoa ={
    nome: "anonimo",
    idade: 40,
    email: "francisco@gmail.com",
    endereco: "Rua Carlos Gomes",
}
console.log(anonimizarPessoa)


// Exercícios de funções de array
// 1-
const pessoas = [
    { nome: "Pedro", idade: 21 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]
const soMaiorQueVinte = pessoas.filter((pessoa, index, array) =>{
    if(pessoa.idade > 20 ){
        return pessoa

    }
})
console.log(soMaiorQueVinte)

// 1- letra b
const pessoas = [
    { nome: "Pedro", idade: 21 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]
const soMenorQueVinte = pessoas.filter((pessoa, index, array) =>{
    if(pessoa.idade < 20 ){
        return pessoa

    }
})
console.log(soMenorQueVinte)

// 2- a)

const numeros = [1, 2, 3, 4, 6, 8, 10, 12];
for(let i=0; i < numeros.length; i++){
numeros[i] = numeros[i] * 2;

}
console.log(numeros);

// b)
const numeros = [ 2, 4, 6, 8, 10, 12];
for(let i=0; i < numeros.length; i++){
numeros[i] = numeros[i] * 3;
}
console.log(numeros);


// c) 
let numeros = [2, 3, 4, 5, 6]
for(let i=0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        return numero + "É par" 

    }
    else{
        return "É impar"
}
console.log(numeros)


// 3- a)
const pessoas = [
{ nome: "Paula", idade: 12, altura:1.8},
{ nome: "João", idade: 20, altura: 1.3},
{ nome: "Pedro", idade: 15, altura: 1.9},
{ nome: "Luciano", idade: 22, altura:1.8},
{ nome: "Artur", idade: 10, altura:1.2},
{ nome: "Soter", idade: 70, altura:1.9},
]
const permissaoParaEntar = pessoas.filter((pessoa, index, array) =>{
if(pessoa.idade > 14 && pessoa.idade < 60 ){
    return pessoa

}
})
console.log(permissaoParaEntar)
//  b)
const pessoas = [
{ nome: "Paula", idade: 12, altura:1.8},
{ nome: "João", idade: 20, altura: 1.3},
{ nome: "Pedro", idade: 15, altura: 1.9},
{ nome: "Luciano", idade: 22, altura:1.8},
{ nome: "Artur", idade: 10, altura:1.2},
{ nome: "Soter", idade: 70, altura:1.9},
]
const semPermissaoParaEntar = pessoas.filter((pessoa, index, array) =>{
if(pessoa.idade < 14 || pessoa.idade > 60 ){
    return pessoa

}
})
console.log(semPermissaoParaEntar)

const consultas = [
{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019"}
]
const consultaCancelada = consultas.map((consulta, index, array)=>{
if(consulta.cancelada === true && consulta.genero === "feminino"){
    return  (`Olá,  Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${ consulta.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
}

})
console.log(consultaCancelada)consulta cancelada

const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019"}
    ]
    const consultaMarcada = consultas.map((consulta, index, array)=>{
        if(consulta.cancelada === false && consulta.genero === "masculino"){
            return  (`Olá, Sr. ${consulta.nome}. Estamos enviando essa mensagem para lembra-lo da sua consulta${ consulta.dataDaConsulta } Por favor, acuse o recebimento deste e-mail.`)
        }

    })
    console.log(consultaMarcada)


