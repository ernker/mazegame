import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Col} from "react-bootstrap";
import { Link } from 'react-router-dom';


export const Login = ({ match }) => {
    return (
        <Col md={3} mdOffset={4} style={{ marginTop: 100}}>
            <div style={{ color: '#00bcd4'}}>
                <h2>Log in</h2>
            </div>
            <div>
                <TextField floatingLabelText="Username" /> <br />
                <TextField floatingLabelText="Password" type='password'/><br />
            </div>
            <div style={{marginTop: 20}}>
                <Link to='/signup'>
                    <FlatButton label="Sign up" primary={true} />
                </Link>
                <RaisedButton label="Go" primary={true} />
            </div>
        </Col>
    )
}