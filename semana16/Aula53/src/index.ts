/**### Exercício1
a) ```Permite enviar uma query para o banco usando a linguagem SQL, permite a quebra
de linha e acessar variáveis do código.```*/
import knex from 'knex'

const connection = knex({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
    host:" ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
    port:3306,
    user:"Viviane",
    password:"MO6pRoroi2cl",
    database:"julian_viviane_luz_db",
    }
    })


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

  getActorById;