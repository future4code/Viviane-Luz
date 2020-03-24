
import React from 'react';
// import './App.css'



class Botao extends React.Component{
  constructor(props){
    super(props)
  }
  clicarNoBotao = () => {
      console.log("Próxima etapa")
  }
    render(){
      return(
        <div>
          
          <button onClick={ this.clicarNoBotao }>Próxima Etapa</button>
        </div>
      )
    }
}







export default Botao
