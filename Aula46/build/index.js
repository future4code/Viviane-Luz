"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const agenda = {
    nome: "reuniao",
    dataDeInicio: moment_1.default("24/06/2020", "DD/MM/YYYY HH:mm"),
    dataFinal: moment_1.default("25/06/2020", "DD/MM/YYYY HH:mm")
};
moment_1.default.locale('pt-br');
const dataDeInicio = moment_1.default('25/06/2020', 'DD/MM/YYYY, HH:mm');
const dataFinal = moment_1.default('25/06/2020', 'DD/MM/YYYY, HH:mm');
function getEvent(dataDeInicio, dataFinal) {
    console.log('Nome: Festa de aniversário');
    console.log('Horário de Inicio: ', dataDeInicio.format('dddd, DD, [de] MMMM [de] YYYY, HH:mm -0500'));
    console.log('Horário de Fim: ', dataFinal.format('dddd, DD, [de] MMMM [de] YYYY, HH:mm'));
    console.log('Festa super animada! Sua presença já é um presente ');
}
getEvent(dataDeInicio, dataFinal);
//# sourceMappingURL=index.js.map