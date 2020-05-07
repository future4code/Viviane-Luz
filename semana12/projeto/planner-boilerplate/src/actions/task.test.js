import { setTask } from "./task";

describe("task", () => {
    test("setTask", () => {
      // Preparação
      const mockTodoText = "teste";
    //  Execução 
      const action = setTask(mockTodoText);
// Verificação
expect(action.type).toBe("SET_TASKS");
expect(action.payload.text).toBe(mockTodoText);
});
})

