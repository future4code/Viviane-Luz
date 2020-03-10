function diaDaSemana(){
    const input = document.querySelector("input")
    const selecionaDiaTarefa = input.value
    const tarefaPlanner = document.querySelector("diaDaSemana")
    const divsegunda = document.getElementById("segunda")
    divsegunda.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divterca = document.getElementById("terca")
    divterca.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divquarta = document.getElementById("quarta")
    divquarta.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divquinta = document.getElementById("quinta")
    divquinta.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divsexta = document.getElementById("sexta")
    divsexta.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divsabado = document.getElementById("sabado")
    divsabado.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"
    const divdomingo = document.getElementById("domingo")
    divdomingo.innerHTML +="<div>" + selecionaDiaTarefa + "</div>"



}