
import React from 'react';
// import './App.css'



class Form2 extends React.Component{
  constructor(props){
    super(props)
    this.state= {
        nome: " "
    }
  }
  clicarNoBotao = () => {
      console.log("Próxima etapa")
  }
    render(){
      return(
        <div>
            <h1>Etapa2 {this.state.nome}1 - Informações do Ensino Superior</h1>
            <label />
            5. Qual o curso?
            <input type="text" />
            6. Qual a unidade de ensino?
            <input type="text" />
          <button onClick={ this.clicarNoBotao }>Próxima Etapa</button>
        </div>
      )
    }
}



export default Form2


