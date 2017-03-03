import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Textarea from './components/textarea.js'
import {Grid, Row, Col } from 'react-bootstrap'

import Maze from './lib/Maze.js';

window.Maze = new Maze();

class App extends Component {
  render() {

    console.log(this.props)
    
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
                  <div className="App">
                      <div className="App-header">
                        <h2>{this.props.app.name}</h2>
                      </div>
                    </div>
            </Col>
          </Row>
          <br />
          <Row className='show-grid'>
              <Textarea />
          </Row>
        </Grid>     
      </div>  
    );
  }
}


function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(App)
