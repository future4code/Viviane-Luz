import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className='container-card'>
        <img src={props.img}/>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        </div>

    )
}

export default CardPequeno