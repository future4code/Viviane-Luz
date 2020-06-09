function adicionarTarefa() {
    const meuInput = document.getElementById("select")
    const tarefaDaSemana = document.getElementById("semana")

    let tarefa = meuInput.value
    let semana = meuSelect.value

    
    const tarefaSegunda  = document.getElementById("Segunda")
    const tarefaTerça = document.getElementById("Terça")
    const tarefaQuarta  = document.getElementById("Quarta")
    const tarefaQuinta  = document.getElementById("Quinta")
    const tarefaSexta  = document.getElementById("Sexta")
    const tarefaSábado  = document.getElementById("Sábado")
    const tarefaDomingo  = document.getElementById("Domingo")

    tarefaSegunda.innerHTML += `<li> ${tarefa} </li>`
    meuInput.value = ""
    
    tarefaDaSemana.innerHTML += `<ul> ${semana} </ul>`
    tarefaDaSemana.value = ""


}



