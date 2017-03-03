import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mazeimg from './images/Map_The_Demonscourge_Part_III_Iakors_Maze'
import { connect } from 'react-redux';

class App extends Component {
  render() {

    console.log(this.props)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>{this.props.app.name}</p>
      </div>
    );
  }
}


function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(App)