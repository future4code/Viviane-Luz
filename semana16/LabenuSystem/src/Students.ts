export class Students {
    private name: string
    private id: string
    private email: string
    private dataDeNascimento: string
    static find: any

    constructor(newName: string, newId: string, newEmail: string, newDataDeNascimento: string){
        this.name = newName
        this.id = newId
        this.email = newEmail
        this.dataDeNascimento = newDataDeNascimento
    }
    public getId(): string{
        return this.id
    }
    
}

