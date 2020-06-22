const initialState = []

export const task = (state = initialState, action) => {
    switch(action.type){
        case "SET_TASKS":
            return action.payload.task;
            default:
                return state
    }
}
