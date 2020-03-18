import React from 'react'
import './BotaoImagem.css'

function BotaoImagem(props){
    return(
        
        <button className='botao'>
        <img src={props.img}/>
        <p>{props.texto}</p>
        </button>

    )
}

export default BotaoImagem