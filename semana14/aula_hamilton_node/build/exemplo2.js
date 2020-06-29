"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const data = '\n Oi, eu sou outro conteúdo do arquivo';
const fileName = 'newFile.txt';
try {
    fs.appendFileSync(fileName, data, 'utf8');
    console.log('Dado inserido com sucesso');
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=exemplo2.js.map