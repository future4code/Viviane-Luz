class Despesa{
    constructor(valor,tipoDespesa,descricao){
    this.valor = valor;
    this.tipoDespesa = tipoDespesa;
    this.descricao = descricao;
}

}
const banco = [];

function cadastreDespesa(){
    const valor = document.getElementById("valor");
    const selecionaValor = valor.value
    const tipoDespesa = document.getElementById("despesa");
    const despesa = tipoDespesa.value
    const tipodescricao = document.getElementById("descricao");
    const descricao = tipodescricao.value
    
    if( selecionaValor === "" || despesa === "" || descricao === ""){
        alert("Sem saldo!")
        
    }else{
        let novaDespesa = new Despesa (selecionaValor, despesa, descricao)
        banco.push(novaDespesa)
        console.log(novaDespesa)
    valor.value = ""
    despesa.value = ""
    descricao.value = ""

    }
}
function filtrarDespesa(){
    const valorMinimo = document.getElementById("valorMinimo");
    const valorMaximo = document.getElementById("valorMaximo");
    const filtrarDespesa = document.getElementById("filtroDespesa")
    console.log(valorMinimo.value)
    console.log(valorMaximo.value)
    console.log(filtroDespesa.value)
    if( valorMaximo.value === "" || valorMinimo.value === "" || filtrarDespesa.value === ""){
        alert("Preencha o Campo")

    }else{
        let array = banco.filter((despesa, index, array)=>{
            return  despesa.tipoDespesa === filtrarDespesa.value && despesa.valor >= valorMinimo.value && valorMaximo
            <= despesa.valor
        })
            console.log(array)
    }
    valorMaximo.value = ""
    valorMinimo.value = ""
    filtrarDespesa.value = ""

}


