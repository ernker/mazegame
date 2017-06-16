import React, {Component} from "react";
import {connect} from "react-redux";
import Mazegame from './mazegame'
import Scoreboard from './scoreboard'
import About from './about'
import Login from './login'
import IF from '../lib/if'
import Signup from './signup'
import RulesOfGame from './rulesofgame'
import Pythonlibdoc from './pythonlibdoc'

class MainWindow extends Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(target) {
        window.smoothScroll(document.getElementById(target))
    }
    render() {

        return (
            <div className="cs-main-content" id='header'>
                <div className="cd-overlay-nav">
                    <span></span>
                </div>
                <div className="cd-overlay-content">
                    <span></span>
                </div>
                <div className='row cloud-bar'>
                    <div className='col-sm-12 clouds'>
                        <div className='cloud cloud-1'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-2'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-3'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-4'>
                            <img role="presentation" src='img/cloud.png'/></div>
                    </div>
                </div>
                <div className="cs-scrolling-bg">
                    <div className="cs-container">
                        <div className="row-fluid">
                            <div className="col-md-12">
                                <div className='col-sm-4 menu'>
                                    <div className='menu-buttons'>
                                        <a className='menu-button' onClick={() => this.handleClick('body')}>play</a>
                                        <a className='menu-button' onClick={() => this.handleClick('footer')}>high score</a>
                                        <a className='menu-button' onClick={() => this.handleClick('about')}>about</a>
                                        <a className='menu-button' onClick={() => this.handleClick('rules')}>rules</a>
                                        
                                        <IF cond={!this.props.isAuthenticated}>
                                            <a className='menu-button' onClick={() => this.handleClick('login')}>signup/login</a>
                                        </IF>
                                        <IF cond={this.props.isAuthenticated}>
                                            <a className='menu-button' onClick={() => this.props.dispatch({type: 'LOGOUT'})}>logout</a>
                                        </IF>

                                    </div>
                                </div>
                                <div className='col-sm-8 '>
                                    <div className="rules">
                                        <div className="rules-text">
                                            <div className="row">
                                                <h1>Rules of the game</h1>
                                                <br/>
                                                <p>The Maze is square 2D matrix containing corridors(0), walls(1), an entry(2)
                                                    and an exit(3). The bot can only move up(), down(), left() and right().
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className='col-sm-6 rules-CS-logo'></div>
                                                <div className='col-sm-6 rules-CS-getmore'>
                                                    <a className='rules-menu-button' onClick={() => this.handleClick('rules')} >give me more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 screen"></div>
                <div className='row'>
                    <div className='col-sm-12 clouds'>
                        <div className='cloud cloud-1'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-2'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-3'>
                            <img role="presentation" src='img/cloud.png'/></div>
                        <div className='cloud cloud-4'>
                            <img role="presentation" src='img/cloud.png'/></div>
                    </div>
                </div>
                <div className='page'>
                    <div className="row body" id="body">
                        <div className="col-md-12">
                            <Mazegame />
                        </div>
                    </div >
                </div>
                <div className='footer'></div>
                <div className='page'>
                    <div className="row body rules-main" id='rules'>
                        <div className='rules-main-box'>
                            <RulesOfGame/>
                            <Pythonlibdoc/>
                        </div>
                    </div>
                </div>
                <div className='footer'></div>

                <div className='page'>
                    <div className="row body rules-main" id='about'>
                        <div className='rules-main-box'><About/></div>
                    </div>
                </div>
                <div className='footer'></div>

                <IF cond={!this.props.isAuthenticated}>
                <div>
                    <div className='page'>
                        <div className='row body rules-main' id='login'>
                            <div className='rules-main-box'>
                                <div className="row">
                                <Login />
                                <Signup />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'></div>
                </div>
                </IF>
                <div className='page'>
                    <div className='row body rules-main' id='footer'>
                        <div className='rules-main-box'>
                            <Scoreboard />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a className="high-score-tab"></a>
                    <div className='footer'></div>
                </div>
            </div>
        ); 
    } 
} 
    
    
function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(MainWindow);