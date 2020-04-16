import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasklist from './components/TaskList';
import Toolbar from './components/Toolbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './Reducers';

const store = createStore (rootReducer) //para usar o provider precisamos usar o createStore
//para podermos usá-la precisamos passar os reducers para ela
function App() {
  return (
/// todo app tem que estar em volta por um provider
    <Provider store={store}> 
    <div className="App">
      <h1>4TASk</h1>
    <TaskForm/>
    <Tasklist/>
    <Toolbar/>
    </div>
    </Provider>
  );
}
export default App;
