import moment from "moment"

type event = {
    nome: string,
    dataDeInicio:  moment.Moment,
    dataFinal: moment.Moment
}

const agenda: event = {
    nome: "reuniao",
    dataDeInicio: moment("24/06/2020", "DD/MM/YYYY HH:mm"),
    dataFinal: moment("25/06/2020", "DD/MM/YYYY HH:mm")
    }
// console.log(agenda)

moment.locale('pt-br')
const dataDeInicio = moment('25/06/2020', 'DD/MM/YYYY, HH:mm')
const dataFinal = moment('25/06/2020', 'DD/MM/YYYY, HH:mm')

function getEvent(dataDeInicio: moment.Moment, dataFinal: moment.Moment){
    console.log('Nome: Festa de aniversário')
    console.log('Horário de Inicio: ',dataDeInicio.format('dddd, DD, [de] MMMM [de] YYYY, HH:mm'))
    console.log('Horário de Fim: ',dataFinal.format('dddd, DD, [de] MMMM [de] YYYY, HH:mm'))
    console.log('Festa super animada! Sua presença já é um presente ')
}
getEvent(dataDeInicio, dataFinal)

//informar ao moment que estamos em TimeZone diferente e usar o idioma local.

