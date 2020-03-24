import React from "react";
import Form1 from "./Components/Form1/Form1";
import Form2 from "./Components/Form2/Form2";
import Form3 from "./Components/Form3/Form3";
import Form4 from "./Components/Form4/Form4";
import { render } from '@testing-library/react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 0
    };
  

  somaClicks = () => {
  const proximaEtapa = this.state.etapa + 1;
  this.setState({
    etapa: proximaEtapa
  });
  };

  render(){
  let etapajsx = null;

  switch (this.state.etapa) {
      case 0:
      etapajsx = <Form1 />;
      break;
      case 1:
      etapajsx = <Form2 />;
      break;
      case 2:
      etapajsx = <Form3 />;
      break;
      case 3:
      etapajsx = <Form4 />;
      break;
      default:
      return (
      <div>
        {etapajsx}
        {this.state.etapa < 3 ? (
          <button onClick={this.somaClicks}>Próxima etapa</button> 
        ) : (
          <Form4 />
        )
          }
      </div>
      );
        }
  }
  }
 
export default App;
