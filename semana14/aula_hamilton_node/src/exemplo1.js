"use strict";
exports.__esModule = true;
var name = process.argv[2];
var age = Number(process.argv[3]);
console.log('Olá', name, 'seja bem-vindo(a)');
if (age >= 18) {
    console.log('Você é maior de idade');
}
else {
    console.log('Você é menor de idade');
}
