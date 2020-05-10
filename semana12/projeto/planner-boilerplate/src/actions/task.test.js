import { setTask, getTask, createTask } from "./task";
import axios from "axios";

describe("task", () => { 
    test("setTask", () => {
      // Preparação
      const mockSetTask = "teste";
    //  Execução 
      const action = setTask(mockSetTask);
// Verificação
expect(action.type).toBe("SET_TASKS");
expect(action.payload.task).toBe(mockSetTask);
});

// teste2
test ("Lista de teste", async () => {
  // mock dos axios
  axios.get = jest.fn(async () => ({
    data:[
      {
        text: "teste2",
        day: "teste2"
      }
    ]
  }))
   
  // mock do dispatch 
  const dispatch = jest.fn()

  // executa ação assicrona
  await getTask() (dispatch)

    // verifica se o dispatch foi chamado a ação correta

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_TASKS",
      payload: {
        task: [
          {
            text: "teste2",
            day: "teste2"
          }
        ]
      }
    })

  })

  test("Teste Create", async () => {
    axios.post = jest.fn(async() =>{
      const body = 
      
        {
          text: "teste3",
          day: "teste3",
        }
        const dispatch = jest.fn()
        await createTask(body)(dispatch)
        expect(dispatch).toHaveBeenCalledWith(getTask)
    })
      
      
  }
  )
}
)
// teste3



