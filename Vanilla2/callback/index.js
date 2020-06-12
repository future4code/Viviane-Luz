const despesa = {
    valor: "valor",
    tipoDespesa: "tipoDespesa",
    descricao:  "descricao"
}

let despesa = [];

function cadastreDespesa(){
    let valor = document.getElementById("valor")
    let selecionaValor = valor.value
    let tipoDespesa = document.getElementById("despesa")
    let tipoDespesa = tipoDespesa.value
    let tipodescricao = document.getElementById("descricao")
    let descricao = tipodescricao.value
    
    if( selecionaValor === "" || despesa === "" || descricao === ""){
        alert("Sem saldo!")
        
    }else{
        let novaDespesa = (selecionaValor, despesa, descricao)
        despesa.push(novaDespesa)
        console.log(novaDespesa)
    valor.value = ""
    tipoDespesa.value = ""
    descricao.value = ""
 }
}
function filtrarDespesa(){
    let valorMinimo = document.getElementById("valorMinimo");
    let valorMaximo = document.getElementById("valorMaximo");
    let filtrarDespesa = document.getElementById("filtroDespesa")
    console.log(valorMinimo.value)
    console.log(valorMaximo.value)
    console.log(filtroDespesa.value)
    if(valorMaximo.value === "" || valorMinimo.value === "" || filtrarDespesa.value === ""){
        alert("Preencha o Campo")

    }else{
        let array = banco.filter((despesa, index, array)=> {
            return  despesa.tipoDespesa === filtrarDespesa.value && despesa.valor >= valorMinimo.value && valorMaximo
            <= despesa.valor
        })
            console.log(array)
    }
    valorMaximo.value = ""
    valorMinimo.value = ""
    filtrarDespesa.value = ""

}
