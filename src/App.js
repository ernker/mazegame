import React, {Component} from "react";
import Header from './components/header.js'
import {connect} from "react-redux";
import Mazegame from "./components/mazegame.js";
import {Grid, Row, Col} from "react-bootstrap";
import Login from './components/login.js';
import Signup from './components/signup.js';
import {Home} from './components/home.js';
import Scoreboard from './components/scoreboard.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    
    render() {
        console.log('App',this.props)
        return (
            <Router>
                <Grid>
                    <Row>
                        <Col>
                            <div>
                                <Route path='/' component={Header} />
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/mazegame' component={Mazegame} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/scoreboard' component={Scoreboard} />
                    </Row>
                </Grid>
            </Router>
        );
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(App)
