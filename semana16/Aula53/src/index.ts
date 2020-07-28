/**### Exercício1
a) ```Permite enviar uma query para o banco usando a linguagem SQL, permite a quebra
de linha e acessar variáveis do código.```*/
import knex from 'knex'

// const connection = knex({ // Estabelece conexão com o banco
//     client: "mysql",
    
//     }
//     })


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

  getActorById;