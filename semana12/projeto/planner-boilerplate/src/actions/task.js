import axios from "axios";

/* Uma action indica para o redux qual a ação deve ser feita no estado*/
/*função sincrona,um comando para guardar*/

export const setTask = text => {
    return {
        type: "SET_TASKS",
        payload: {
            text
        }
    };
};

/*função assincrona, contato com api*/
export const getTask = () => async (dispatch, getState) => {
    const task = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-viviane");
    dispatch(setTask(task.data));
};
export const createTask = (text, day) => async (dispatch, getState) => {
    const body = {
        day: day,
        text: text
    }
    const task = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-viviane", body); 
     dispatch(getTask());
}
