import React from 'react'
import FormUser from './Components/FormUser'
import styled from 'styled-components'
import FormList from './Components/FormList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        nome: "",
        email: "",
        aoSalvarBotao: 0
    }
}
  render(){
    return (
      <div>
         <FormUser />
         <FormList />
         <button>Ir para página da Lista</button>
      </div>
    );
  }
  
}




export default App;
