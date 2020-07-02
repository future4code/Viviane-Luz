"use strict";
exports.__esModule = true;
var fs = require("fs");
//escrevendo no arquivo
// const data: string = 'Oi, eu sou o conteúdo do arquivo';
// const fileName: string = 'newFile.txt';
//
// try {
//   fs.writeFileSync(fileName, data);
//   console.log('Arquivo Criado com Sucesso')
// } catch (e) {
//   console.log(e)
// }
//lendo do arquivo
var fileName = 'newFile.txt';
try {
    var data = fs.readFileSync(fileName);
    console.log('Buffer', data);
    var treatedData = data.toString();
    console.log(treatedData);
}
catch (e) {
    console.log(e);
}
//adicionando algo ao arquivo
// const data: string = '\n Oi, eu sou outro conteúdo do arquivo';
// const fileName: string = 'newFile.txt';
//
// try {
//   fs.appendFileSync(fileName, data, 'utf8');
//   console.log('Dado inserido com sucesso')
// } catch (e) {
//   console.log(e)
// }
