import React from "react";
import { connect } from "react-redux";

class Planner extends React.Component {
  render() {
    const dias = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ]
    return (
      <div>
        <form>
        <label>Tarefa</label>
        <input type="text"></input>
        </form>
        <select>
          <option>Domingo</option>
          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
        </select>
        <button>Salvar</button>    
			</div>
		)
  }
}

export default connect()(Planner);
