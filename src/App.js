import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainWindow from './components/mainwindow'

class App extends Component {

    
    render() {
        return (
            <Router>
                <div>
                    <Route path='/' component={MainWindow} />
                </div>
            </Router>
        )
    }
} 
    
    
function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(App);