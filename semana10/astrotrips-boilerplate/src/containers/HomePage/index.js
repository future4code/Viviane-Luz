import React, { Component } from "react";
import styled from "styled-components";
import { CountryDropdown } from "react-country-region-selector";
import { applicateUser } from '../../actions/UserTrip'
import { connect } from "react-redux"; 

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  selectCountry = (val) => {
    this.setState({ country: val });
  };

  handleFormSubmit = (event) => {
    event.preventDefault(); 
    this.props.candidatar(this.state.form)
    console.log(this.state.form);
    this.setState({ form: {} }); /*entendi que atualiza o estado e limpa os inputs*/
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: { ...this.state.form, [name]: value }}); /*fiz essa sintaxe sem entender direito*/
  };

  render() {
    return (
      <MyTripForm onSubmit={this.handleFormSubmit}>
        <label>Nome:</label>
        <MyForm
          onChange={this.handleInputChange}
          value={this.state.form.nome}
          name="nome"
          required
          type="text"
          pattern="[A-Za-z]{3,}"
          title="o nome deve conter no min 3letras"
        ></MyForm>
        <label>Idade:</label>
        <MyForm
          onChange={this.handleInputChange}
          value={this.state.form.idade}
          name="idade"
          required
          type="number"
          min={18}
        ></MyForm>
        <label>Teste de aplicação:</label>
        <MyForm
          onChange={this.handleInputChange}
          value={this.state.form.email}
          name="applicationText:"
          required
          type="applicationText:"
        ></MyForm>
        <label>Profissão:</label>
        <MyForm
          onChange={this.handleInputChange}
          value={this.state.form.profissão}
          name="profissão"
          required
          type="text"
        ></MyForm>
        <label>País:</label>
        <CountryDropdown
          required
          onChange={this.hadleInputChange}
          value={(val) => this.selectCountry}
        >
          
        </CountryDropdown>
         
        <label>Trip:</label>
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="planeta">Planeta</option>
        </select>
        <MyFormButton type="submit">Send</MyFormButton>
      </MyTripForm>
    );
  }
}

const MyTripForm = styled.form`
  margin: 200px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const MyForm = styled.input`
  margin: 10px 0;
  height: 40px;
  border-radius: 6px;
  border: solid 1px #e0e0e0;
`;

const MyFormButton = styled.button`
  margin: 10px 0;
  height: 40px;
  background-color: #ff7300;
  border: 0px;
`;

const mapDispatchToProps = (dispatch) => {
  return {
      candidatar: (form) => dispatch(applicateUser(form)) /*faz a troca de página através do dispatch*/
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
