import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Textarea from "./components/textarea.js";
import RulesOfGame from "./components/rulesofgame.js";
import {Grid, Row, Col} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <div className="App">
                                <div className="App-header">
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row className='show-grid'>
                        <Textarea />
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <RulesOfGame />
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}


function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(App)
