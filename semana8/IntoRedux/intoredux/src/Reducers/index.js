import { combineReducers } from "redux";
import tarefas from './todos'


const rootReducer = combineReducers({
    tarefas:tarefas
  });
  
  export default rootReducer;

  
