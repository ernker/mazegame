import React from 'react'
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { runcode } from '../action/action'
import MazeCanvas from './mazecanvas'

class Textarea extends React.Component {
    
    constructor(){
        super()

        this.state = {
            textarea: ''
        }
    }

    handleChange(event){
        this.setState({
            textarea: event.target.value
        })
    }

    handleClick(e){
        e.preventDefault;
        this.props.dispatch(runcode(this.state.textarea))
    }

    render() {
        return(
            <Grid>
                <Row>
                <Col  md={6}>
                    <MazeCanvas>
                    </MazeCanvas>
                </Col>
                <Col  md={6}>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleClick.bind(this)}>RUN</Button>
                </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(Textarea)