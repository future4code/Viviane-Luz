
import React from 'react';
// import './App.css'



class Form1 extends React.Component{
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
            <h1>Etapa {this.state.nome}1 - Dados Gerais</h1>
            <label />
            1.Qual o seu nome?
            <input type="text" />
            2.Qual a sua idade?
            <input type="text" />
            3.Qual o seu email?
            <input type="text" />
            4.Qual a sua escolaridade?
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ensino médio completo"> Ensino médio completo</option>
            <option value="Ensino médio incompleto"> Ensino médio incompleto</option>
            <option value="Ensino superior completo"> Ensino superior completo</option>
            <option value="Ensino superior completo"> Ensino superior incompleto</option>
            </select>
          <button onClick={ this.clicarNoBotao }>Próxima Etapa</button>
        </div>
      )
    }
}



export default Form1


