import React from "react";
import {connect} from "react-redux";
import {Col} from 'react-bootstrap'
import {actionDrawMaze, actionNextMaze} from "../action/action";
import MazeCanvas from "./mazecanvas";
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as Router} from 'react-router-dom';
import If from '../lib/if.js';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';

class Mazegame extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            codearea: '',
            code: '',
            userType: 1,
            respmsg: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(newCode) {
        this.setState({codearea: newCode})
    }

    handleRunClick(e) {
        e.preventDefault();
        window.runCode(this.state.codearea);
    }

    handleReplayClick(e) {
        e.preventDefault();
        let history = window
            .Maze
            .getHistory();
        let timeout = 0;

        history.forEach(item => {
            setTimeout(() => {
                this
                    .props
                    .dispatch(actionDrawMaze(item, timeout));
            }, timeout);

            timeout += 500;
        });
    }

    handleNextMazeClick(e) {
        e.preventDefault();
        this
            .props
            .dispatch(actionNextMaze());
    }

    handleSubmitCode(e) {
        e.preventDefault

        if (this.state.userType == 1) {

            const payload = {
                code: this.state.codearea,
                language: 'python'
            }

            const auth = 'Token '+this.props.token

            fetch('https://ec2-52-57-177-201.eu-central-1.compute.amazonaws.com/api/snippets/', {
                method: 'POST',
                haders: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }

                const item = (
                     <Col md={6}>                
                        <h4 style={{ color: '#F44336'}}>Submission failed</h4>
                    </Col>
                )

                this.setState({respmsg: item})

                throw new Error('internal server error');
            }).then(rez => {
                if (rez.code.length !== 0) {
                    this.setState({ code: rez.code, userType: 2})
                }

                 const item = (
                     <Col md={6}>                
                        <h4 style={{ color: '#1B5E20'}}>Submission successful</h4>
                    </Col>
                )
                this.setState({ respmsg: item})

            }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));

        } else {

            const payload = {
                code: this.state.codearea,
                language: 'python'
            }

            const auth = 'Token '+this.props.token

            fetch('https://ec2-52-57-177-201.eu-central-1.compute.amazonaws.com/api/snippets/', {
                method: 'PUT',
                haders: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }

                const item = (
                     <Col md={6}>                
                        <h4 style={{ color: '#F44336'}}>Submission failed</h4>
                    </Col>
                )

                this.setState({respmsg: item})

                throw new Error('internal server error');

            }).then(rez => {
                if (rez.code.length !== 0) {
                    this.setState({code: rez.code, userType: 2})
                }

                const item = (
                     <Col md={6}>                
                        <h4 style={{ color: '#1B5E20'}}>Submission successful</h4>
                    </Col>
                )
                
                this.setState({ respmsg: item})

            }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));
        }

    }

    componentDidMount() {
        
        const auth = 'Token '+this.props.token

        if (this.props.isAuthenticated) {
            fetch('https://ec2-52-57-177-201.eu-central-1.compute.amazonaws.com/api/snippets/', {
                headers: {
                    'Authorization': auth
                }
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('not valid authorization token');
            }).then(rez => {
                
                if (rez.code.length !== 0) {
                    this.setState({code: rez.code, userType: 2})
                }

            }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));
        }

        const cm = this.refs.editor.getCodeMirror();
        const {width, height} = {width: 440, height: 460};
        cm.setSize(width, height);
    }

    render() {

        const options = {
             mode: {
                name: "python",
                version: 2,
                singleLineStringErrors: false
            },
            lineNumbers: true,
            value: this.state.code,
            indentUnit: 4,
            matchBrackets: true
        }

        return (
            <div>
                <Col md={12}>
                    <h4
                        style={{
                        color: '#00bcd4',
                        textAlign: 'center'
                    }}>
                        A <span style={{
                fontWeight: 'bold'
            }}>
                            maze
                        </span> is a path or collection of paths, typically from an entrance to a goal.
                    </h4>
                </Col>
                <Col md={6}>
                    <br/>
                    <MazeCanvas/>
                </Col>
                <Col md={6}>
                    <br/>
                    <div
                        style={{
                        border: '2px solid lightgray'
                    }}>
                        <CodeMirror ref='editor' onChange={this.handleChange} options={options}/>
                    </div>
                </Col>
                <br/>
                <Col md={6}>
                    <RaisedButton
                        label='RUN'
                        onTouchTap={this
                        .handleRunClick
                        .bind(this)}/>
                    <span></span>
                    <RaisedButton
                        label='REPLAY'
                        onTouchTap={this
                        .handleReplayClick
                        .bind(this)}/>
                    <span></span>
                    <RaisedButton
                        label='NEXT MAZE'
                        onTouchTap={this
                        .handleNextMazeClick
                        .bind(this)}/>
                    <span></span>
                    <If cond={this.props.isAuthenticated}>
                        <RaisedButton
                            label="SUBMIT CODE"
                            onTouchTap={this
                            .handleSubmitCode
                            .bind(this)}/>
                    </If>
                </Col>
                <Col md={6} id="output"></Col>
                {this.state.respmsg}
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Mazegame)
