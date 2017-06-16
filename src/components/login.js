import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Col} from "react-bootstrap";
import { actionToken } from '../action/action';
import {connect} from "react-redux";


class Login extends Component {
    
    constructor (props, context) {
        super(props, context)
        
        this.state = {
            username: '',
            password: '',
            resmsg: ''
        }
    }
    
    
    handleClick(e) {
        e.preventDefault;
        const credentials = {
            username : this.state.username,
            password: this.state.password
        }

        fetch('https://2hard4u.eu/api/tokens/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
            })
            .then(res => { 
                if (res.ok) {
                    return res.json()
                } 
                
                const item = (
                        <h4 style={{ color: '#F44336'}}>Invalid login. Please try again.</h4>
                )

                this.setState({ resmsg: item})
                throw new Error('Invalid login');
            })
            .then(res => {
                this.props.dispatch(actionToken(res.token));
                return true
            })
            .then(res => {
                window.smoothScroll(document.getElementById('body'));
            })
            .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));
    }

    handleUsername(e) {
        this.setState({ username: e.target.value})
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        
        const styles = {
            underlineStyle: { borderColor:'grey900'},
            floatingLabelStyle: { color: 'grey900'}
        }

        
        return (
                <Col md={6}  style={{ marginTop: 100, textAlign: 'center' }}>
                    <div style={{ color: 'grey900'}}>
                        <h2>Log in</h2>
                    </div>
                    <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Nickname" onChange={this.handleUsername.bind(this)}/>
                    <br/>
                    <TextField underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Password" type='password' onChange={this.handlePassword.bind(this)}/><br/>
                    <div style={{ marginTop: 20}}>
                        <RaisedButton label="Go" backgroundColor='grey900'  onTouchTap={this.handleClick.bind(this)} />
                    </div>
                    <div style={{ marginTop: 20}}>
                        {this.state.resmsg}
                    </div>
                </Col>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Login)