import { combineReducers } from "redux";
import tarefas from './todos'

export const rootReducer = combineReducers ({ 
    tarefa: tarefas
  })