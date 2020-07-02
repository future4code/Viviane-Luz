//1- Recebe como parâmetros os atributos da classe através do this
/**
 
3- Pode ser acessada dentro da própria classe usando a keyword this*/
import * as fs from 'fs'


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private dataDeNascimento: string
  private balance: number = 0;
//  private transactions: Transaction[]

  constructor(
     cpf: string,
     name: string,
     age: number,
     dataDeNascimento: string
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
     this.dataDeNascimento = dataDeNascimento;
  }

    public getBalance(value: number) {
    //Aqui deve ser inserida a lógica de pegar saldo do usuário
    class Transaction {
        private date: string;
        private value: number;
        private description: string;
        
        constructor(date: string, value: number, description: string) {
          this.date = date;
          this.value = value;
          this.description = description
        }
      }
    }

    
    

}
