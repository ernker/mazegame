import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Textarea from './components/textarea.js'

class App extends Component {
  render() {

    console.log(this.props)

    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{this.props.app.name}</h2>
          </div>
        </div>
        <Textarea />
      </div>         
    );
  }
}


function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(App)