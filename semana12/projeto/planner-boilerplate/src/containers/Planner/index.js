import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import styled from 'styled-components';
import { Fragment } from "react";

class Planner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dias: "",
      task: ""
    }
}
componentDidMount = () => {
  this.props.getTask()
}
handleOnChange = (event) => {
  this.setState({ task: event.target.value })
  }

onSubmit = (event) => {
  event.preventDefault()
  this.props.createTask(this.state.task, this.state.dias)
  this.setState({ task: ""})
}

handleChangeSelect = (event) => {
  this.setState({ dias: event.target.value })
}

  render() {
    const dias = [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo"

    ]
    console.log(this.props.task)
    return (
      <Fragment>
      <Container>
        <Form onSubmit={this.onSubmit}>
        <Label>Tarefa:</Label>
        <Input
         name="nome"
          type="text" 
        value={this.state.task} 
        onChange={this.handleOnChange}>
        </Input>
        <Select 
        value={this.state.dias} 
        onChange={this.handleChangeSelect}>{dias.map((dias)=>{
      return (
        <option key={dias} value={dias}>{dias}</option>
            )
          })}
        </Select>
        <Button type="submit">Salvar Tarefa</Button>
        </Form>
      </Container>
      <hr></hr>
      <div>
      {dias.map((dia) => {
            return (
              <ul key={dia}>
                {dia}
                {this.props.task &&
                  this.props.task.map((task) => {
                    if(task.day === dia) {
                      return <li key={task.id}>{task.text}</li>;
                    }
                  })}
              </ul>
            );
          })}
      </div>
      </Fragment>
    )
  }
}

const Input = styled.input`
height: 40px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
const Select = styled.select`
margin-bottom: 20px;
height: 40px;
`
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 100px auto;
`
const Button = styled.button`
height: 40px;
background-color: #e76f51;
color: white;
`
const Label = styled.label`
margin: 40px;
font-family: helvetica;
color: #e76f51;
`
const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch)

const mapStateToProps = state  => ({
  task: state.task
})


export default connect(mapStateToProps, mapDispatchToProps)(Planner);