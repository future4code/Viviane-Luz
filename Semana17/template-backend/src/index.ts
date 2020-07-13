//  import express, { Request, Response } from "express";
// // import dotenv from "dotenv";
// import { AddressInfo } from "net";

//  dotenv.config();

//  const app = express();

//  app.use(express.json());

//  const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });


// import { v4 } from "uuid";

// const id = v4();

// export class IdGenerator {
//   public generate(): string {
//     return v4();
//   }
// }
// console.log("Generated Id: ", id);

import knex from 'knex'

const connection = knex({ // Estabelece conexão com o banco
 client: "mysql",
 connection: {
 host:"",
 port:3306,
 user:"turma_aluno",
 password:"ahninanab",
 database:"turma_aluno_db"
}
})

const createTableUser = async (id: string, email: string, password: string) => {
  try {
  await connection.raw(`
  CREATE TABLE User2 (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
  `)
  console.log("Sucesso")
  } catch (error) {
  console.log(error)
  }
}

createTableUser("1", "astrodev@labenu.com", "bananinha")

