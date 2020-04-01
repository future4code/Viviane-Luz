import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'



class FormUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            email: "",
            aoSalvarBotao: 0
        }
    }
    
    aoSalvarBotao = (event) => {        
        console.log(this.state.nomeDigitado)
        console.log(this.state.emailDigitado)
        const body = {
            name: this.state.nomeDigitado,
            email: this.state.emailDigitado
        }
        axios.post("https://us-central1-future-apis.cloudfunctions.net/api/users", body,{
            headers:{
                'api-token': "viviane-Hamilton"
            }
        }).then(() =>{
            alert("Usuário criado com sucesso")
        }).catch(() =>
            alert("Erro")
        )
    }

    aoDigitarNomeInput = (event) => {
        const conteudoDigitado = event.target.value
        this.setState({
            nomeDigitado: conteudoDigitado
        }
        )

    }
    aoDigitarEmailInput = (event) => {
        const conteudoDigitado = event.target.value
        this.setState({
            emailDigitado: conteudoDigitado
        }
   
        )
    
    }
    render() {
        return(
            <Container>
            <div>
                <h3>{ this.props.nome }</h3>
                <input onChange={this.aoDigitarNomeInput} value={this.state.nomeDigitado}/>
                   <h3>{ this.props.email }</h3>
                <input onChange={this.aoDigitarEmailInput} value={this.state.emailDigitado}/>
                <button onClick={this.aoSalvarBotao}>Salvar</button>
            </div>
            </Container>
          );
    }
    
  }

const Container = styled.div`
border:  solid black;
width: 300px;
margin: 100px auto; 
padding: 20px;
display: flex;

`

  

  
  export default FormUser;


