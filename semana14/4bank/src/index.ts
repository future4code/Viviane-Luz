import * as fs from 'fs';

let accounts = []

const userInfo: user = {
 name: string(process.argv[2]),
 age:  Number(process.argv[3]),
 cpf: Number (process.argv[4])
}
function createAcounte(accounte: user){
  const data: Buffer = fs.readFileSync(fileName);// vai impedir que o writeFileSync sobrescreva o que está no arquivo
  fs.writeFileSync("userInfo.json", JSON.stringify(userInfo))
  const userInfo: string[] = users.map((user: any) => `${user.username} - ${user.cpf}`);
  console.log(userInfo);


  if(cpf === newCpf){
    return accounte.filter(cpf: createAccounte =>{
      userInfo.cpf === cpf
      console.log("Abra sua conta")
    })
  }
}


try {
    fs.appendFileSync(fileName, 'utf8');
    console.log('Dado inserido com sucesso');
}
catch (e) {
    console.log(e);
}

console.log("Olá", name, "Seja bem vindo (a)");

if(age < 18){

} else {
 console.log('Não possui permissão para abrir a conta');
 console.log('Esse cpf já possui cadastro');

}
  // const treatedData: string = data.toString();  //não entendi aqui
  // const users: any = JSON.parse(treatedData);  //não entendi aqui o que faz exatamente
  // console.log('Cpf já cadastrado ', users.cpf)
} 





