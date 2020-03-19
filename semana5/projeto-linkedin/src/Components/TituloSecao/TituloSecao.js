import React from "react" 
import  './TituloSecao.css'


function TituloSecao(props) {
    return (
      <div className="Titulo">
        
    <h1>{props.titulo}</h1>
      </div>
    );
  }


export default TituloSecao;




