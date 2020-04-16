const initialState = {
    tarefas:[],
}

const tarefas = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_TASK":
            return {...state, 
                tarefas: [...state.tarefas,action.payload]
            }
        case "DELETE_TASK": 
            return {...state, 
                tarefas: [...state.tarefas,action.payload]

            } 
            default:
                return state
    }
}

export default tarefas