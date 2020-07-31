import { CreateBandInputDTO } from "../model/Create";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";


export class CreateBusiness {
    public async createBand(input: CreateBandInputDTO) {
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const createDatabase = new BandDatabase();


        await createDatabase.createBand(id, name, input.name, input.genero)
    }
}