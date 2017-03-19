import React from "react";
import {connect} from "react-redux";
import {Button, Col} from "react-bootstrap";
import CodeMirror from "react-codemirror";
import "codemirror/mode/python/python";
import {actionRunCodeAsync} from "../action/action";
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
        this.props.dispatch(actionRunCodeAsync(this.state.textarea));
    }

    handleReplayClick(e) {
        e.preventDefault();
        window.Maze.replay();
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
                    <CodeMirror value={this.state.textarea} onChange={this.handleChange.bind(this)} options={options}/>
                    <br />
                    <Button bsStyle="primary" onClick={this.handleRunClick.bind(this)}>RUN</Button>
                    <span> </span>
                    <Button bsStyle="primary" onClick={this.handleReplayClick.bind(this)}>REPLAY</Button>
                </Col>
                <div>
                    {this.props.runcode}
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state.code
}

export default connect(mapStatetoProps)(Textarea)
