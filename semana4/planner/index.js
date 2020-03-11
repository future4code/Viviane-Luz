function diaDaSemana(){
    const input = document.querySelector("input")
    const selecionaDiaTarefa = input.value
    const tarefaPlanner = document.getElementById("select")
    const dia = tarefaPlanner.value
    console.log(dia)

    if(selecionaDiaTarefa === null || selecionaDiaTarefa === ""){
        alert("Digite uma tarefa!")
    }else{
        if(dia === "Segunda-Feira"){
            const divsegunda = document.getElementById("segunda")
            divsegunda.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"

        }else if (dia === "Terça-Feira"){
    const divterca = document.getElementById("terca")
    divterca.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
        }else if (dia === "Quarta-Feira"){
    const divquarta = document.getElementById("quarta")
    divquarta.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
     }else if (dia === "Quinta-Feira"){
    const divquinta = document.getElementById("quinta")
    divquinta.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
     }else if (dia === "Sexta-Feira"){
    const divsexta = document.getElementById("sexta")
    divsexta.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
    }else if (dia === "Sábado"){
    const divsabado = document.getElementById("Sábado")
    divsabado.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
    }else if (dia === "Domingo"){
    const divdomingo = document.getElementById("Domingo")
    divdomingo.innerHTML +="<li>" + selecionaDiaTarefa + "</li>"
    }

    }
    input.value = ""
}