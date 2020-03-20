import React from 'react';
import CardGrande from './Components/CardGrande/CardGrande'
import TituloSecao from './Components/TituloSecao/TituloSecao'
import CardPequeno from './Components/CardPequeno/CardPequeno'
import BotaoImagem from './Components/BotaoImagem/BotaoImagem'
import './App.css';

function App() {
  return (
    <div className="App">
        <TituloSecao titulo={"Dados Pessoais"} />
        <CardGrande titulo={"Astrodev"} img={require("./img/astrodev.png")} texto={"Oi, eu sou Astrodev.Sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho pra eles. "}/>
        <CardPequeno titulo={"Email:"} img={require("./img/mail.png")} texto={"Future4code@gmail.com"}/> 
        <CardPequeno titulo={"Endereço:"} img={require("./img/house.png")} texto={"Rua do Futuro, 4"}/>
        <BotaoImagem img={require("./img/arrow.png")} texto={"Ver Mais"}/>
        <TituloSecao titulo={"Experiências Profissionais"} />
        <CardGrande titulo={"Future4"} img={require("./img/F4.png")} texto={"Formando desenvolvedores para o futuro!"}/>
        <CardGrande img={require("./img/cloud.png")} titulo={"Outsmart"} texto={"Criando apps incríveis para grandes clientes."}/>
        <TituloSecao titulo={"Minhas redes sociais"}/>
       <BotaoImagem img={require("./img/facebook.png")} texto={"Facebook"}/>
      </div>
  );
}

export default App;
