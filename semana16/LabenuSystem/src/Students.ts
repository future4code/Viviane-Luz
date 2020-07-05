import { User } from "./User"
import moment from "moment"

export class Students implements User {
    constructor(
    public id: string,
    public name: string,
    public email: string,
    private dataDeNascimento: moment.Moment,
    private hobbies:  string[]
    ) {}
    
    public getIdade(){
        return moment().diff(this.dataDeNascimento, "years")
    }
}
    // static find: any

 //constructor(newName: string, newId: string, newEmail: string, newDataDeNascimento: string){
    //     this.name = newName
    //     this.id = newId
    //     this.email = newEmail
    //     this.dataDeNascimento = newDataDeNascimento
    // }

    export const students1 = new Students('1', 'Joao', 'Joazinho@gmail.com',
    moment('18/09/1995', "DD/MM/YYYY"), ['Ler', 'Assistir filme'])
    
    export const students2 = new Students('2', 'Paula', 'paula@gmail.com',
    moment('3/07/1998', "DD/MM/YYYY"), ['Estudar', 'Viajar'])
    
    export const students3 = new Students('3', 'Paula', 'paula@gmail.com',
    moment('8/04/1886', "DD/MM/YYYY"), ['Estudar', 'Dar aula'])
    
    export const students4 = new Students('4', 'Darvas', 'darvas@gmail.com',
    moment('01/06/1990', "DD/MM/YYYY"), ['Jogar', 'Programar'])
    
    
    
    
    