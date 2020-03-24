
import React from 'react';
// import './App.css'



class Form3 extends React.Component{
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
            <h1>Etapa3 {this.state.nome}1 - Informações Gerais de Ensino</h1>
            <label />
            5. Por que você não terminou um curso de graduação?
            <input type="text" />
            6. Você fez algum curso complementar?
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="Nenhum"> Nenhum</option>
            <option value="Curso técnico"> Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
            </select>
            <input type="text" />
          <button onClick={ this.clicarNoBotao }>Próxima Etapa</button>
        </div>
      )
    }
}



export default Form3


