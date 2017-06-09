import React, {Component} from "react";
import Header from './components/header.js'
import {connect} from "react-redux";
import Mazegame from "./components/mazegame.js";
import {Grid, Row, Col} from "react-bootstrap";
import Login from './components/login.js';
import Signup from './components/signup.js';
import {Home} from './components/home.js';
import Scoreboard from './components/scoreboard.js';

class App extends Component {

    render() {
        return (

            <div className="container">
                <div className="cd-overlay-nav">
                    <span/>
                </div>
                <div className="cd-overlay-content">
                    <span/>
                </div>
                <div className="innerContainer">
                    <div className="row top-nav-bar">
                        <div className="col-sm-12 clouds">
                            <div className="cloud cloud-1">
                                <img src="img/cloud.png" role='presentation' />
                            </div>
                            <div className="cloud cloud-2">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                            <div className="cloud cloud-3">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                            <div className="cloud cloud-4">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <a href="#0" className="cd-nav-trigger">Menu<span className="cd-icon"/></a>
                        </div>
                    </div>
                    <div className="row menu-part">
                        <div className="col-sm-6 menu">
                            <div className="menu-buttons">
                                <a
                                    className="menu-button"
                                    href="#"
                                    id="play"
                                    >play</a>
                                <a className="menu-button" href="#">high score</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="rules">
                                    <div className="col-sm-12">
                                        <div className="rules-text">
                                            <h1>
                                                Rules of the game</h1>
                                            <br/>
                                            <br/>
                                            <p>The Maze is square 2D matrix containing corridors(0), walls(1), an entry(2)
                                                and an exit(3). The bot can only move up(), down(), left() and right().
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="rules-CS">
                                            <div className="row">
                                                <div className="col-sm-6 rules-CS-logo"/>
                                                <div className="col-sm-6 rules-CS-getmore">
                                                    <a className="rules-menu-button" href="#">give me more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img className="screen2" src="img/screen2.png" role='presentation'/>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 clouds">
                            <div className="cloud cloud-1">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                            <div className="cloud cloud-2">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                            <div className="cloud cloud-3">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                            <div className="cloud cloud-4">
                                <img src="img/cloud.png" role='presentation'/>
                            </div>
                        </div>
                    </div>
                    <div className="row body" id="body">
                        <div className='col-sm-12'>
                            <Mazegame />
                        </div>   
                    </div>
                    <div className="row footer">
                        <a className="high-score-tab" href="#"/>
                        <img className="screen2" src="./img/footer1.png" role='presentation'/>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(App)
