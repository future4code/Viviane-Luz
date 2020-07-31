export class Create {
    static toUserModel: any;

}

export class CreateBandInputDTO{
    public name: string;
    public genero: string;

    constructor(name: string, genero: string){
        this.genero = genero;
        this.name = name;

    }
}