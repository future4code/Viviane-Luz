import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        FutureTube
        
      <input type="search" pattern="buscar" />
      </header>
      <div className="meu-menu">
          <a className="menu-item"href="">Inicio</a>
          <a className="menu-item"href="">Em alta</a>
          <a className="menu-item"href="">Inscrições</a>
          <a className="menu-item"href="">Originais</a>
          <a className="menu-item"href="">Biblioteca</a>
          <a className="menu-item"href="">Histórico</a>
        </div>

    <section className="container">
{/* <img class="caixa1" src="img/video1.jpg"> <a class="menu" href="./videos.html"> Video1 </a> */}
<img className="caixa1"src={require("./img/video1.jpg")} />
<img className="caixa2"src={require("./img/video2.jpg")} />
<img className="caixa3"src={require("./img/video3.jpg")} />
<img className="caixa4"src={require("./img/video4.jpg")} />
<img className="caixa5"src={require("./img/video5.jpg")} />
<img className="caixa6"src={require("./img/video6.jpg")} />
<img className="caixa7"src={require("./img/video7.jpg")} />
<img className="caixa8"src={require("./img/video8.jpg")} />
</section>
<footer>
        2020 Copyright.com.br
    </footer>
    </div>
  );
}

export default App;
