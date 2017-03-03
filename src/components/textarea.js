import React from 'react'
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

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

    render() {
        console.log(this.state.textarea)

        return(
            <Grid>
                <Row>
                <Col  md={6}>MAZE MAP</Col>
                <Col  md={6}>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleChange.bind(this)} />
                    </FormGroup>
                    <Button bsStyle="primary">RUN</Button>
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