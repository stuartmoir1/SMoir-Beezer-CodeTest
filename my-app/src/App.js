import React, { Component } from 'react';
import Container from './containers/Container'

import fire from './firebase.js'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount(){ 
   const data = fire.database().ref('/')
    data.on('value', (snapshot) => {
      const data = snapshot.val()
      this.setState({
        data: data
      })
    })
  }

  render() {
    //console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container data={this.state.data} /> 
      </div>
    );
  }
}

export default App;
