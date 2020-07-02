import * as fs from 'fs'
import * as moment from 'moment'

type extrato = {
    descricao: number,
    value: number,
    date: string
}

type Account = {
    nome: string,
    idade: number,
    cpf: number,
    dataDeNascimento: number,
    extrato: extrato[],
}

const user = {
    nome: "Viviane",
    idade: 33,
    cpf: 2233998799,
    dataDeNascimento: 8/4/1987
}

const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])
const cpf: number = Number(process.argv[4])

if(idade >= 18)
console.log('Usuário tem que ter mais de 18 anos')
console.log(`Conta aberta com sucesso!!`)
// const dataDeNascimento  = moment(dataDeNascimento, "DD/MM/YYYY");não funciona
const userFilePath = "/Users/vivianesantanaluz/Desktop/Future4/Viviane-Luz/Bancario/users.json"

function createAccount (user: string, nome: string, dataDeNascimento: string, idade: number, cpf: number): any {
    fs.readFileSync("/Users/vivianesantanaluz/Desktop/Future4/Viviane-Luz/Bancario/users.json")
    const usersFilePath = "users.json";
    const usersFileData: Buffer = fs.readFileSync(userFilePath);
    const usersString: string = usersFileData.toString()
    const users: Account[] = JSON.parse(usersString)

    users.push(name)//quando eu coloco para dar o push em usuários dá erro, não entendi pq
}
console.log(user)
//tentei fazer escrever no json mas não tbm não criou o aquivo
const usersStringified = JSON.stringify(user, null, 2);
  fs.writeFileSync(userFilePath, usersStringified);

  createAccount.name,cpf
 //Não entendi, porque retornou (Olá, undefined, Você tem NaN)
 //Fiz sem o áuxilio do código do Goli, para testar e fazer sozinha
 //Ficou algumas funcionalidades que deu erro, e comentei no código para quando for corrigido o pr.