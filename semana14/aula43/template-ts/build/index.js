"use strict";
const operacao = (process.argv[2]);
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);
function sum(operacao, number1, number2) {
    switch (operacao) {
        case "soma":
            return number1 + number2;
        case "subt":
            break;
    }
}
console.log(sum(operacao, number1, number2));
