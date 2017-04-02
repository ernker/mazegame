import React from "react";
import TextField from 'material-ui/TextField';
import {Col} from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';

export const Signup = () => {
    return (
        <Col md={6} mdOffset={3} style={{
            marginTop: 100
        }}>
            <div style={{
                color: '#00bcd4'
            }}>
                <h2>Sign up</h2>
                <p>Start playing the most amazing game ever</p>
            </div>
            <div>
                <TextField floatingLabelText="Name"/> <span>   </span>
                <TextField floatingLabelText="Surname" /><br/>
                <TextField floatingLabelText="Username" /> <span> </span>
                <TextField floatingLabelText="Your email" /><br/>
                <TextField floatingLabelText="Password" type='password' /><span>   </span>
                <TextField floatingLabelText="Confirm password" type='password'/><br/>
            </div>
            <div style={{
                marginTop: 20
            }}>
                <RaisedButton label="Register" primary={true}/>
            </div>
        </Col>
    )
}