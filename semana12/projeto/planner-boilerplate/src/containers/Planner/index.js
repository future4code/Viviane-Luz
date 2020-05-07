import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task' 

class Planner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dias: "",
      task: ""
    }
this.onChange = (event) => {
  this.setState({ dias: event.target.value })
  }

// onClick = () => {
//   this.setState({})
// }

}
  
  render() {
    const dias = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    ]
    return (
      <div>
        <form>
        <label>Tarefa:</label>
        <input name="nome" type="text" value={this.state.dias} onChange={this.onChange}></input>
        </form>
        <select>{dias.map((dias)=>{
      return (
        <option key={dias} value={dias}>{dias}</option>
            )
          })}
        </select>   
        <button onClick={this.addNewTask}>Criar Tarefa</button>    
			</div>
		)
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(taskActions, dispatch) 

export default connect(null, mapDispatchToProps)(Planner);
