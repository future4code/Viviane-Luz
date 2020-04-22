import React, { Component } from "react";
import styled from "styled-components";



class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {}
      };
    }

handleFormSubmit = event => {
  event.preventDefault();
  console.log("oiiiiii")
}
    render(){
      return(
        <MyTripForm onSubmit={this.handleFormSubmit}>
          <MyForm></MyForm>
          <MyForm></MyForm>
          <MyForm></MyForm>
          <MyFormButton type="submit">Send</MyFormButton>
         </MyTripForm >
      )    
    }
}

const MyTripForm = styled.form`
margin: 200px auto;
width: 400px;
display: flex;
flex-direction: column;
`

const MyForm = styled.input`
margin:10px 0;
height: 40px;
border-radius: 6px;
border: solid 1px #e0e0e0;
`

const MyFormButton = styled.button`
margin:10px 0;
height: 40px;
background-color: #ff7300;
border: 0px;
`


export default HomePage