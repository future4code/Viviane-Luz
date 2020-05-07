const initialState = []

export const task = (state = initialState, action) => {
    switch(action.type){
        case "SET_TASK":
            return action.payload.tasks;
            default:
                return state
    }
}
