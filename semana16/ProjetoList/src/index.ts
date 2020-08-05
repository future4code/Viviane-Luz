import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import cors from "cors" 


dotenv.config();

const connection = knex({   
  client: "mysql",
  connection: {
    
  },
});


const app = express();
app.use(cors({ origin: true})) 


app.use(express.json());
export default app;


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