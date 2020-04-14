import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'


class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nomeDigitado: "",
            aoSalvarBotao: 0
        }
    }
   
    
    aoSalvarBotao = (event) => {        
        console.log(this.state.nomeDigitado)
        }
            
    aoDigitarTarefa = (event) => {
        const conteudoDigitado = event.target.value
        this.setState({
            nomeDigitado: conteudoDigitado
        }
        )

    }

    render() {
        return(
            <Container>
            <div>
                <Texto>4 Task</Texto>
                <Caixa onChange={this.aoDigitarTarefa} placeholder="O que tem que ser feito?"value={this.state.nomeDigitado}/>
                <Form onClick={this.aoSalvarBotao}>Todas</Form>
                <Form onClick={this.aoSalvarBotao}>Pendentes</Form>
                <Form onClick={this.aoSalvarBotao}>Completas</Form>
            </div>
            </Container>
          );
    }
    
  }

const Container = styled.div`
display:flex;
flex-direction: column;
width: 800px;
margin: 100px auto;
text-align: center;
height: 100px;
`

const Caixa = styled.input`
width: 100%;
height: 80px;
border-radius: 10px;
border: 0px;

`

const Texto = styled.h1`
color: #b83f45;
font-size: 40px;
`
const Form = styled.button`
background-color: white;
height: 60px;
padding: 25px;
color: #4b5266;
border-radius: 10px;
border: 0px;
margin-top: 20px;
margin-right: 20px;

`







export default Todo







