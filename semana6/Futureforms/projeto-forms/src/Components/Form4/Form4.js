
import React from 'react';
// import './App.css'



class Form4 extends React.Component{
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
            <h1>O  {this.state.nome} Formulário acabou</h1>
            <label />
            5. Por que você não terminou um curso de graduação?
            <input type="text" />
            6. Você fez algum curso complementar?
            <input type="text" />
          <button onClick={ this.clicarNoBotao }>Próxima Etapa</button>
        </div>
      )
    }
}



export default Form4


