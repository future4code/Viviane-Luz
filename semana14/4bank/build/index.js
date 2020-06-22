"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = process.argv[2];
const age = Number(process.argv[3]);
console.log("Olá", name, "seja bem vindo (a)");
if (age >= 18) {
    console.log('Abra sua conta');
}
else {
    console.log('Não possui permissão para abrir a conta');
}
