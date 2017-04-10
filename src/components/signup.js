import TextField from 'material-ui/TextField';
import {Col} from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux";
import React, {Component} from 'react';

class Signup extends Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            firstname: '',
            lastname: '',
            nickname: '',
            email: '',
            pw: '',
            resmsg: ''

        }
    }

    handleFirstname(e) {
        e.preventDefault;
        this.setState({ firstname: e.target.value})
    }

    handleLastname(e) {
        e.preventDefault;
        this.setState({ lastname: e.target.value})
    }

    handleNickname(e) {
        e.preventDefault;
        this.setState({ nickname: e.target.value})
    }

    handleEmail(e) {
        e.preventDefault;
        this.setState({ email: e.target.value})
    }

    handlePassword(e) {
        e.preventDefault;
        this.setState({ pw: e.target.value})
    }

    handleRegister(e) {
        e.preventDefault;
        fetch('https://demo4370489.mockable.io/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username, 
                password: this.state.admin, 
                email: this.state.email,
                first_name: this.state.firstname,
                last_name: this.state.lastname,
                })
            })
            .then(res => { 

                if (res.ok) {
                    return res.json()
                } 

                const item = (
                     <Col md={7} mdOffset={1} style={{  marginTop: 20 }}>                
                        <h4 style={{ color: '#F44336'}}>Registration unsuccessful!</h4>
                    </Col>
                )
                this.setState({ resmsg: item})
                throw new Error('Failed registration');
            })
            .then(res => {
                
                const item = (
                     <Col md={7} mdOffset={1} style={{  marginTop: 20 }}>                
                        <h4 style={{ color: '#1B5E20'}}>You account has been confirmed. You may now login.</h4>
                    </Col>
                )
                this.setState({ resmsg: item})
            }
        )
    }


    render() {
        return (
            <div>
                <Col
                    md={6}
                    mdOffset={3}
                    style={{
                    marginTop: 100
                }}>
                    <div style={{
                        color: '#00bcd4'
                    }}>
                        <h2>Sign up</h2>
                        <p>Start playing the most amazing game ever</p>
                    </div>
                    <div>
                        <TextField floatingLabelText="First name" onChange={this.handleFirstname.bind(this)}/>
                        <span> </span>
                        <TextField floatingLabelText="Last name" onChange={this.handleLastname.bind(this)}/><br/>
                        <TextField floatingLabelText="Nickname" onChange={this.handleNickname.bind(this)}/>
                        <span> </span>
                        <TextField 
                            floatingLabelText="Your email" 
                            onChange={this.handleEmail.bind(this)}
                        />
                        <br/>
                        <TextField floatingLabelText="Password" type='password' onChange={this.handlePassword.bind(this)}/>
                    </div>
                </Col>
                <Col md={1} mdOffset={3} style={{ marginTop: 20}}>
                    <RaisedButton label="Register" primary={true} onTouchTap={this.handleRegister.bind(this)}/>
                </Col>
                {this.state.resmsg}
            </div>
        ); 
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Signup)
