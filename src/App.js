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
        return (
            <Router>
                <Grid>
                    <Row>
                        <Col>
                            <div>
                                <Route path='/ui' component={Header} />
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Route exact={true} path='/ui' component={Home} />
                        <Route path='/ui/mazegame' component={Mazegame} />
                        <Route path='/ui/login' component={Login} />
                        <Route path='/ui/signup' component={Signup} />
                        <Route path='/ui/scoreboard' component={Scoreboard} />
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
