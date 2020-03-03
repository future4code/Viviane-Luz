// Exercício 1
// a.  false
// b.  false
// c.  true
// d.  false
// e.  boolean

// Exercício 2

// a. O que é `array` e como se declara em `JS`?
// São formas de  armazenar várias informações entre colchetes []
// b. Qual o index inicial de um `array`?
// let array
// c. Como se determinar o tamanho do `array`?
// array.length
// d. Indique todas as mensagens impressas no console.

// I.  undefined
// II.  null
// III.  11
// IV.  3  e  4
// V.  19  e  9
// VI.  3
// VII.  1

// Exercícios de escrita de código:
// a- 
const valor = prompt ("qual a temperatura?")
const calculo = Number(valor - 32)*5/9 + 273.15
const resultadoKelvin = calculo + "k"
console.log(resultadoKelvin)

// b-

const valor = prompt ("qual a temperatura?")
const calculo = Number(valor)*9/5 + 32
const resultadoFahrenheit = calculo + "F"
console.log(resultadoFahrenheit)

// c-
     const valor = prompt ("qual a temperatura?")
     const calculoFahrenheit = Number(valor)*9/5 + 32
     const calculoKelvin = Number(valor - 32)*5/9 + 273.15
    const resultadoFahrenheit = calculoFahrenheit + "F"
    const resultadoKelvin = calculoKelvin + "K"
    console.log(resultadoFahrenheit, resultadoKelvin)

// 2-
    const rua = prompt("qual o nome da sua rua?")
    const cor = prompt("a sua cor favorita?") 
    let idade = prompt("Qual a sua idade?")
    const profissao = prompt("qual a sua prosissao?")

// 3-a

    const quilowattHora = prompt ("quantos quilowatts?")
    const calculoConversao = Number (quilowattHora)*0.05
    const resultadoConversao = quilowattHora + "quilowatts sao equivalentes a R$ " + calculoConversao 
    console.log(resultadoConversao)

    // -b 
    const quilowattHora = prompt ("quantos quilowatts")
    const calculoConversao = Number (quilowattHora)*0.05*0.85
    let resultadoConversao = quilowattHora + "quilowatts sao equivalentes a R$ " + calculoConversao 
    console.log(resultadoConversao)



//  Desafios

    const valor = prompt ("quantas libras?")
    const calculoConversao = Number(valor)/2.2046
    const resultadoConversao = valor + "lb equivalem a " + calculoConversao + "kg"
    console.log(resultadoConversao)   

    const valor = prompt ("quantas oz?")
    const calculoConversao = Number(valor)/35.274
    const resultadoConversao = valor + "oz equivalem a " + calculoConversao + "Kg"
    console.log(resultadoConversao)

    const valor = prompt ("quantas mi?")
    const calculoConversao = Number(valor)/0.00062137
    const resultadoConversao = valor + "mi equivalem a " + calculoConversao + "m"
    console.log(resultadoConversao)

    const valor = prompt ("quantos pés?")
    const calculoConversao = Number(valor)/3.2808
    const resultadoConversao = valor + "ft equivalem a " + calculoConversao + "m"
    console.log(resultadoConversao)

    const valor = prompt (" quantos galoes?")
    const calculoConversao = Number(valor)/0.26417
    const resultadoConversao = valor + "gal equivalem a " + calculoConversao + "l"
    console.log(resultadoConversao)

    const valor = prompt ("quantas xicaras?")
    const calculoConversao = Number(valor)/4 
    const resultadoConversao = valor + "xic equivalem a " + calculoConversao + "l"
    console.log(resultadoConversao)

    const valor = prompt ("quantos litros?")
    const calculoConversao = Number(valor)*4 
    const resultadoConversao = valor + "litros equivalem a " + calculoConversao + "xic"
    console.log(resultadoConversao)

    





























