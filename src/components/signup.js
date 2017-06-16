import TextField from 'material-ui/TextField';
import {Col} from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux";
import React, {Component} from 'react';

class Signup extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            firstname: '',
            lastname: '',
            nickname: '',
            email: '',
            pw: '',
            resmsg: '',
            email_validation: true
        }
    }

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    handleFirstname(e) {
        e.preventDefault;
        this.setState({firstname: e.target.value})
    }

    handleLastname(e) {
        e.preventDefault;
        this.setState({lastname: e.target.value})
    }

    handleNickname(e) {
        e.preventDefault;
        this.setState({nickname: e.target.value})
    }

    handleEmail(e) {
        e.preventDefault;
        this.setState({email: e.target.value, email_validation: this.validateEmail(e.target.value)})
        console.log(this.state.email_validation)
    }

    handlePassword(e) {
        e.preventDefault;
        this.setState({pw: e.target.value})
    }

    handleRegister(e) {
        e.preventDefault;
        const payload = {
            username: this.state.nickname,
            password: this.state.pw,
            email: this.state.email,
            first_name: this.state.firstname,
            last_name: this.state.lastname
        }

        fetch('https://cloudsquad.lt/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                return res.json()
            }

            const item = (
                <Col md={6} style={{ marginTop: 20, textAlign: 'center'}}>
                    <h4 style={{ color: '#F44336' }}>Registration unsuccessful!</h4>
                </Col>
            )

            this.setState({resmsg: item})
            throw new Error('Failed registration');

        }).then(res => {

            const item = (
                <Col md={6} style={{ marginTop: 20, textAlign: 'center' }}>
                    <h4 style={{ color: '#1B5E20' }}>You account has been confirmed. You may now login.</h4>
                </Col>
            )
            this.setState({resmsg: item})
        }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));

    }

    render() {

         const styles = {
            underlineStyle: { borderColor:'grey900'},
            floatingLabelStyle: { color: 'grey900'}
        }

      

        return (
                <Col md={6}  style={{ marginTop: 100, textAlign: 'center' }}>
                    <div style={{ color: 'grey900'}}>
                        <h2>Sign up</h2>
                    </div>
                    <div>
                        <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="First name" onChange={this.handleFirstname.bind(this)}/>
                        <span> </span>
                        <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Last name" onChange={this.handleLastname.bind(this)}/><br/>
                        <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Nickname" onChange={this.handleNickname.bind(this)}/>
                        <span> </span>
                        <TextField 
                                underlineFocusStyle={styles.underlineStyle} 
                                floatingLabelStyle={styles.floatingLabelStyle} 
                                floatingLabelText="Your email" 
                                errorText={this.state.email_validation ? "" : "This is not a valid email"}
                                onChange={this.handleEmail.bind(this)}
                        />
                        <br/>
                        <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Password" type='password' onChange={this.handlePassword.bind(this)}/>
                    </div>
                    <div style={{ marginTop: 20, textAlign: 'center' }}> 
                        <RaisedButton label="Register" backgroundColor='grey900' onTouchTap={this.handleRegister.bind(this)} />
                    </div>
                    <div style={{ marginTop: 20, textAlign: 'center'}}>
                        {this.state.resmsg}
                    </div>
                </Col>
        );
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Signup)
