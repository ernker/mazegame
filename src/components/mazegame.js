import React from "react";
import {connect} from "react-redux";
import {Col} from 'react-bootstrap'
import CodeMirror from "react-codemirror";
import "codemirror/mode/python/python";
import "../../node_modules/codemirror/lib/codemirror.css";
import {actionDrawMaze, actionNextMaze} from "../action/action";
import MazeCanvas from "./mazecanvas";
import RulesOfGame from "./rulesofgame.js";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/python'
import 'brace/theme/xcode'
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as Router, } from 'react-router-dom'

class Mazegame extends React.Component {

    constructor() {
        super();

        this.state = {
            textarea: '',
        };
    }

    handleChange(code) {
        console.log(code)
        this.setState({
            textarea: code
        })
    }

    handleRunClick(e) {
        e.preventDefault();
        window.runCode(this.state.textarea);
    }

    handleReplayClick(e) {
        e.preventDefault();
        let history = window.Maze.getHistory();
        let timeout = 0;
     
        history.forEach(item => {
            setTimeout(() => {
                this.props.dispatch(actionDrawMaze(item, timeout));
            }, timeout);

            timeout += 500;
        });
    }

    handleNextMazeClick(e) {
        e.preventDefault();
        this.props.dispatch(actionNextMaze());
    }

/*    componentDidMount() {
        const cm = this.refs.editor.getCodeMirror();
        const {width, height} = {width: 440, height: 450};
        // set width & height
        cm.setSize(width, height);
    }*/

    render() {
        /*let options = {
            mode: {
                name: "python",
                version: 2,
                singleLineStringErrors: false
            },
            lineNumbers: true,
            indentUnit: 4,
            matchBrackets: true
        };*/

           const options = {
            highlightActiveLine: true,
//            showPrintMargin: true,
            showFoldWidgets: true,
            showGutter: true,
            displayIndentGuides: true,
            showInvisibles: false,
            highlightGutterLine: true,
            showFoldWidgets: true
        }

        return (
                <div>
                <Col md={12}>
                    <h4 style={{ color: '#00bcd4', textAlign: 'center'}}>A <span style={{ fontWeight: 'bold'}}>maze</span> is a path or collection of paths, typically from an entrance to a goal.</h4>
                </Col>
                <Col md={5}>
                    <br />
                    <MazeCanvas />
                </Col>
                <Col md={7}>
                    <br />
                    <div style={{ border: '2px solid lightgray' }}>
                      <AceEditor width='500px' height='400px' mode='python' theme='xcode' 
                            setOptions={options} />
                    </div>
                </Col>
                <br />
                <Col md={6} >
                        <RaisedButton label='RUN' onTouchTap={this.handleRunClick.bind(this)} />
                        <span> </span>
                        <RaisedButton label='REPLAY' onTouchTap={this.handleReplayClick.bind(this)} />
                        <span> </span>
                        <RaisedButton label='NEXT MAZE' onTouchTap={this.handleNextMazeClick.bind(this)} />
                        <span> </span>
                        <RaisedButton label="SUBMIT CODE" />
                </Col>

                {/*<Col md={6}>
                    <CodeMirror ref="editor" value={this.state.textarea} onChange={this.handleChange.bind(this)}
                                options={options}/>
                    <br />
                    <RaisedButton label='RUN' onTouchTap={this.handleRunClick.bind(this)} />
                    <span> </span>
                    <RaisedButton label='REPLAY' onTouchTap={this.handleReplayClick.bind(this)} />
                    <span> </span>
                    <RaisedButton label='NEXT MAZE' onTouchTap={this.handleNextMazeClick.bind(this)} />
                    <span> </span>
                    <RaisedButton label="SUBMIT CODE" />
                </Col>*/}
                <Col md={6} id="output">
                </Col>
             </div>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Mazegame)
