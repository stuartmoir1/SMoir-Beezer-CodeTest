import React, { Component } from 'react'
import Table from './components/Table'
import fire from './other/firebase.js'
import {dashboardData} from './other/database_data.js'

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
    const data = dashboardData(this.state.data)
    //console.log('data:', data)

    return (
      <div>
        <Table data={data} />
      </div>
    );
  }
}

export default App