import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


class FormList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lista: []
            
        }
    }
    componentDidMount(){
        this.lista()
    }
    lista = () => {
        axios.get("https://us-central1-future-apis.cloudfunctions.net/api/users", {
        headers:{
            'api-token': "viviane-Hamilton"
        }
    }).then((response) =>{
        const cadastro = response.data.result
        this.setState({lista: cadastro})
    }).catch(() =>
        alert("Erro ao criar usuário")
    )

    }
    
    render(){
        return(
            <div>
               <h2>Usuarios Cadastrados:</h2> 
               <ul>
                {this.state.lista.map((user) => {
                    return(
                        <UserList>
                            <span>{user.name}</span>
                            {/* <DeleteButton>X</DeleteButton>  */}
                        </UserList>
                        );
                    })} 
               </ul>
            </div>
        )
    }
}
const UserList = styled.li`
    display:flex;
    justify-content: space-between;
    width:300px;
    margin: 0 auto;
    border-bottom: 1px solid black;
    padding: 20px 0;
    
`
export default FormList;


