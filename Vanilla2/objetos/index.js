let dados = {
    autor: "",
    titulo: "",
    conteudo: ""

}
console.log(dados)

function dados(){
    const meuInput = document.getElementById('autor')
    const segundoInput = document.getElementById('titulo')
    const meuText = document.getElementById('conteudo')

    let dados = meuInput.value
    let texto = meuText.value
    let input = segundoInput.value

    dados.innerHTML += `<form> ${dados}</form>`
    meuInput.value = " "
    dados.innerHTML += `<form> ${texto}</form>`
    meuText.value = ''
    dados.innerHTML += `<form> ${input}</form>`
    segundoInput.value = ''


}