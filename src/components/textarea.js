import React from "react";
import {connect} from "react-redux";
import {Button, Col} from "react-bootstrap";
import CodeMirror from "react-codemirror";
import {runCodeAsync, actionMove} from "../action/action";
import "../../node_modules/codemirror/lib/codemirror.css";
import MazeCanvas from "./mazecanvas";

class Textarea extends React.Component {
    
    constructor(){
        super()

        this.state = {
            textarea: 'Type here!'
        }
        
        let _this = this;

        window.Maze.dispatch = (x, y) => {
            console.log('Dispatcher');
            _this.props.dispatch(actionMove({x: x, y: y}))
        } 

    }

    handleChange(code){
        this.setState({
            textarea: code 
        })
    }
    
    handleClick(e){
        e.preventDefault;
        this.props.dispatch(runCodeAsync(this.state.textarea));
    }

    render() {

        let options = {
            lineNumbers : true
        }
        return (
            
            <div>            
                <Col md={6}>
                    <MazeCanvas>
                    </MazeCanvas>
                </Col>
                <Col md={6}>
                    <CodeMirror value={this.state.textarea} onChange={this.handleChange.bind(this)} options={options} />
                    <br />
                    <Button bsStyle="primary" onClick={this.handleClick.bind(this)}>RUN</Button>
                </Col>
                <div>
                    {this.props.runcode}
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state){
  return state.code
}

export default connect(mapStatetoProps)(Textarea)
