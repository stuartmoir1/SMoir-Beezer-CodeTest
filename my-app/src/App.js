import React, { Component } from 'react'
import Table from './components/Table'

import fire from './other/firebase.js'
import {dashboardData} from './other/database_data.js'

import './style/App.css'
import logo from './images/beezer_logo.png'

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
    const data = dashboardData(this.state.data)
    console.log(data)

    return (
      <div className='app'>
        <header className='app-header'>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className='app-title'>Beezer Dashboard</h1>
        </header>
        <Table id='app-table' data={data} />
      </div>
    );
  }
}

export default App