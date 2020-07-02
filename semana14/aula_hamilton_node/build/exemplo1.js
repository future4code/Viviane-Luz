"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = process.argv[2];
const age = Number(process.argv[3]);
console.log('Olá', name, 'seja bem-vindo(a)');
if (age >= 18) {
    console.log('Você é maior de idade');
}
else {
    console.log('Você é menor de idade');
}
//# sourceMappingURL=exemplo1.js.map