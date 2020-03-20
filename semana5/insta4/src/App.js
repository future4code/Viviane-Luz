import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Luz'}
          fotoUsuario={'https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'}
          fotoPost={'https://images.unsplash.com/photo-1498447817931-2edda1605b97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'}
        />
        <Post
          nomeUsuario={'Future4'}
          fotoUsuario={'https://images.unsplash.com/photo-1579628086600-19cad5e4d49c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'}
          fotoPost={'https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
        />
      </div>
    );
  }
}

export default App;
