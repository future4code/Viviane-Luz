
import React from 'react';
// import './App.css'



class Input extends React.Component{
  constructor(props){
    super(props)
  }
  
  
    render(){
      return(
        <div>
             <input 
             type="text" 
             value={this.state.name} onChange={this.handleOnChangeName} />
         
        </div>
      )
    }
}






export default Input
