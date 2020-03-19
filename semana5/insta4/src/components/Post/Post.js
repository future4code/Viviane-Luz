import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      comentando: false,
      numeroComentarios: 0
    }
  }

  // onClickCurtida = () => {
  //   if(!this.state.curtido){
  //     this.setState({
  //       numeroCurtidas: this.state.numeroCurtidas + 1,
  //       curtido:true
  //     })

    // console.log('Curtiu!')
  
 
  onClickCurtida = ()=>{
    if(!this.state.curtido){
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1,
      curtido: true
    })
  } else {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas = 0,
      curtido: false
    })

}
}



   onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      
    } else {
      iconeCurtida = iconeCoracaoBranco 
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post