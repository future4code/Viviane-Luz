import React from 'react'
import './CardGrande.css'

function CardGrande(props){
    return(
        <div className='container-card'>
        <img src={props.img}/>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        </div>

    )
}

export default CardGrande