"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const user = {
    nome: "Viviane",
    idade: 33,
    cpf: 2233998799,
    dataDeNascimento: 8 / 4 / 1987
};
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const cpf = Number(process.argv[4]);
if (idade >= 18 || idade < 18)
    console.log(`Conta aberta com sucesso!!`);
console.log('Usuário não tem permissão para abrir conta!');
const userFilePath = "/Users/vivianesantanaluz/Desktop/Future4/Viviane-Luz/Bancario/users.json";
function createAccount(user, nome, dataDeNascimento, idade, cpf) {
    fs.readFileSync("/Users/vivianesantanaluz/Desktop/Future4/Viviane-Luz/Bancario/users.json");
    const usersFilePath = "users.json";
    const usersFileData = fs.readFileSync(userFilePath);
    const usersString = usersFileData.toString();
    const users = JSON.parse(usersString);
    users.push(name);
}
console.log(user);
const usersStringified = JSON.stringify(user, null, 2);
fs.writeFileSync(userFilePath, usersStringified);
createAccount.name, cpf;
//# sourceMappingURL=index.js.map