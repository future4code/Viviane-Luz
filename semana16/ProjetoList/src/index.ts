import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";


dotenv.config();


const connection = knex({   
  client: "mysql",
  connection: {
    host:  "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",//process.env.DB_HOST,
    port: 3306,
    user: "julian_viviane_luz",
    password: "MO6pRoroi2cl",//process.env.DB_PASSWORD,
    database: "julian_viviane_luz",//process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

// app.put('/', testEndpoint)

// async function testEndpoint(req:Request, res:Response): Promise<void>{
//   try {
//     const result = await connection.raw(`
//       SELECT * FROM Actor
//     `)

//     res.status(200).send(result)
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }



// CREATE TABLE TodoListUser (
//   id VARCHAR(255) PRIMARY KEY, 
//   name VARCHAR(255) NULL, 
//   nickname VARCHAR(255) UNIQUE NOT NULL, 
//   email VARCHAR(255) UNIQUE NOT NULL
// );