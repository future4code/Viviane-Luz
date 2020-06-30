import { User } from "./user"

export class Customer extends User {
    constructor(name: string, email: string, id: string, password: string){
        super(name, email, id, password)
    }
}


export enum USER_ID {
    USER = "USER"
}