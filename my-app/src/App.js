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
    //console.log('componentDidMount...')
    const data = fire.database().ref('/')
    data.on('value', (snapshot) => {
      const data = snapshot.val()
      this.setState({
        data: data
      })
    })
  }

  handleOnClickRatingStar(rating, title, accId){
    //console.log('handleOnClick...')
    let data = this.state.data
    const apps = data['accounts'][accId]['apps']
    
    // Update rating.
    Object.keys(apps).forEach((app) => {
      const path = data['accounts'][accId]['apps'][app]
      if (path['title'] === title){
        path['rating'] = rating
        return
      }
    })

    this.setState({
      data: data
    })
  }

  render() {
    //console.log(this.state.data)
    const data = dashboardData(this.state.data)
    if (data.length === 0) { return null } // Smooths table rendering.

    return (
      <div className='app'>
        <header className='app-header'>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className='app-title'>Beezer Dashboard</h1>
        </header>
        <Table id='app-table' data={data} onClick={(rating, title, accId) => this.handleOnClickRatingStar(rating, title, accId)}/>
      </div>
    );
  }
}

export default App