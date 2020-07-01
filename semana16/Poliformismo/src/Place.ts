export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const myPlace = new Place()
  //2-A Não pode criar uma instancia de uma classe abstrata
  //3 a- Uma classe pode implementar uma classe, mas não entendi direito.
  //3 b- Porque não podem ter uma intância própria, depende da classe é isso?