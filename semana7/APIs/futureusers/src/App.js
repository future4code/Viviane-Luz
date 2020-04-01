import React from 'react'
import FormUser from './Components/FormUser'
import styled from 'styled-components'
import FormList from './Components/FormList'


class App extends React.Component {
  render(){
    return (
      <div>
         <FormUser nome={"Nome:"} email={"E-mail:"} />
         <FormList />
         <button>Ir para página da Lista</button>
      </div>
    );
  }
  
}




export default App;
