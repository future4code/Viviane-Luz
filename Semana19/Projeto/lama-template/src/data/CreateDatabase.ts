import { BaseDatabase } from "./BaseDatabase";
import { Create } from "../model/Create";

export class CreateDatabase extends BaseDatabase {
    [x: string]: any;

  private static TABLE_NAME = "";
    getConnection: any;

  public async createBand(
    id: string,
    name: string,
    genero: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          genero,
          role
        })
        .into(CreateDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getCreateById(email: string): Promise<Create> {
    const result = await this.getConnection()
      .select("*")
      .from(CreateDatabase.TABLE_NAME)
      .where({ email });

    return Create.toUserModel(result[0]);
  }

}
