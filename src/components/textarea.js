import React from 'react'
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import CodeMirror from 'react-codemirror'
import { runcode } from '../action/action'
import "../../node_modules/codemirror/lib/codemirror.css"
import MazeCanvas from './mazecanvas'

class Textarea extends React.Component {
    
    constructor(){
        super()

        this.state = {
            textarea: 'Type here!'
        }
    }

    handleChange(code){
        this.setState({
            textarea: code 
        })
    }

    handleClick(e){
        e.preventDefault;
        this.props.dispatch(runcode(this.state.textarea))
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
            </div>
        )
    }
}

function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(Textarea)