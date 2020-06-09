function adicionarTarefa() {
    const meuInput = document.getElementById("select")
    const tarefaDaSemana = document.getElementById("semana")

    let tarefa = meuInput.value
    let semana = tarefaDaSemana.value

    
    const elemento  = document.getElementById(semana)
    
    elemento.innerHTML += `<li> ${tarefa} </li>`
    meuInput.value = ""
    
    tarefaDaSemana.innerHTML += `<ul> ${semana} </ul>`
    tarefaDaSemana.value = ""


}



