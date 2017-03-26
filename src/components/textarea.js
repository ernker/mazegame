import React from "react";
import {connect} from "react-redux";
import {Button, Col} from "react-bootstrap";
import CodeMirror from "react-codemirror";
import "codemirror/mode/python/python";
import {actionDrawMazeAsync, actionNextMaze} from "../action/action";
import "../../node_modules/codemirror/lib/codemirror.css";
import MazeCanvas from "./mazecanvas";

class Textarea extends React.Component {

    constructor() {
        super();

        this.state = {
            textarea: 'Type here!'
        };
    }

    handleChange(code) {
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
        //window.Maze.getHistory().reduce((prev, cur) => prev.then(this.props.dispatch(actionDrawMazeAsync(cur))), Promise.resolve());
        let history = window.Maze.getHistory();
        history.forEach(item => {
            this.props.dispatch(actionDrawMazeAsync(item))
        });
    }

    handleNextMazeClick(e) {
        e.preventDefault();
        this.props.dispatch(actionNextMaze());
    }

    componentDidMount() {
        const cm = this.refs.editor.getCodeMirror();
        const {width, height} = {width: 440, height: 450};
        // set width & height
        cm.setSize(width, height);
    }

    render() {
        let options = {
            mode: {
                name: "python",
                version: 2,
                singleLineStringErrors: false
            },
            lineNumbers: true,
            indentUnit: 4,
            matchBrackets: true
        };

        return (
            <div>
                <Col md={6}>
                    <MazeCanvas>
                    </MazeCanvas>
                </Col>
                <Col md={6}>
                    <CodeMirror ref="editor" value={this.state.textarea} onChange={this.handleChange.bind(this)}
                                options={options}/>
                    <br />
                    <Button bsStyle="primary" onClick={this.handleRunClick.bind(this)}>RUN</Button>
                    <span> </span>
                    <Button bsStyle="primary" onClick={this.handleReplayClick.bind(this)}>REPLAY</Button>
                    <span> </span>
                    <Button bsStyle="primary" onClick={this.handleNextMazeClick.bind(this)}>NEXT MAZE</Button>
                </Col>
                <Col md={6} id="output">
                </Col>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {code: state.code};
}

export default connect(mapStatetoProps)(Textarea)
