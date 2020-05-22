import * as fs from 'fs';

const userInfo: user = {
 name: string(process.argv[2]),
 age:  Number(process.argv[3]),
 cpf: Number (process.argv[4])
}
function userInfo(arrayUser: userInfo[], name: string, cpf ?: string, age: string){
  if(cpf){
    return arrayUser.filter(cpf: userInfo =>{
      userInfo.cpf === cpf
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

  const data: Buffer = fs.readFileSync(fileName);
  // os dados são retornados em um formato, e chama método toString
  const treatedData: string = data.toString();  //não entendi aqui
  const users: any = JSON.parse(treatedData);  //errado
  const usersInfo: string[] = users.map((user: any) => `${user.username} - ${user.cpf}`);
  console.log(usersInfo);
  console.log('Cpf já casdatrado ', users.cpf)
} 


projejto da semana





