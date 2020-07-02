import * as fs from 'fs'

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

// const fileName: string = 'newFile.txt';
// try {
//   const data: Buffer = fs.readFileSync(fileName);
//   const treatedData: string = data.toString();
//   console.log(treatedData)
// }catch (e) {
//   console.log(e)
// }

//adicionando algo ao arquivo

const data: string = '\n Oi, eu sou outro conteúdo do arquivo';
const fileName: string = 'newFile.txt';

try {
  fs.appendFileSync(fileName, data, 'utf8');
  console.log('Dado inserido com sucesso')
} catch (e) {
  console.log(e)
}

