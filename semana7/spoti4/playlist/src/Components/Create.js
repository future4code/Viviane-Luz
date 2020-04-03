import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'


class Create extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nomeDigitado: "",
            aoSalvarBotao: 0
        }
    }
   
    
    aoSalvarBotao = (event) => {        
        console.log(this.state.nomeDigitado)
        const body = {
            name: this.state.nomeDigitado,
        }
        axios.post("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", body,{
            headers:{
                'auth': "viviane-Hamilton"
            }
        }).then(() =>{
            alert("Playlist criada com sucesso!")
        }).catch((err) =>{
            console.log(err)  })
    }

    aoDigitarNomeInput = (event) => {
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
                <label>Nome:</label>
                <input onChange={this.aoDigitarNomeInput} value={this.state.nomeDigitado}/>
                <button onClick={this.aoSalvarBotao}>Criar Playlist</button>
            </div>
            </Container>
          );
    }
    
  }

const Container = styled.div`
border: solid green;
width: 200px;
margin: 100px auto; 
padding: 30px;
height: 100px;
`








export default Create