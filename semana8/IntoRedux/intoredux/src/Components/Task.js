import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'


class Task extends React.Component {
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
                <h1>4 Task</h1>
                <label>O que tem que ser feito? </label>
                <input onChange={this.aoDigitarTarefa} value={this.state.nomeDigitado}/>
                <button onClick={this.aoSalvarBotao}>Todas</button>
                <button onClick={this.aoSalvarBotao}>Pendentes</button>
                <button onClick={this.aoSalvarBotao}>Completas</button>
            </div>
            </Container>
          );
    }
    
  }

const Container = styled.div`
display:flex;
margin: 0px auto;  
padding: 30px;
height: 100px;
`






export default Task







