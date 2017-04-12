import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
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
        console.log('click!')
        const credentials = {
            username : this.state.username,
            password: this.state.password
        }

        fetch('https://www.2hard4u.eu/api/tokens/', {
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
                this.props.history.push('/ui/mazegame')
            }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));
    }

    handleUsername(e) {
        this.setState({ username: e.target.value})
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        
        return (
            <div>
                <Col md={3} mdOffset={4} style={{ marginTop: 100 }}>
                    <div style={{ color: '#00bcd4' }}>
                        <h2>Log in</h2>
                    </div>
                    <TextField floatingLabelText="Username" onChange={this.handleUsername.bind(this)}/>
                    <br/>
                    <TextField floatingLabelText="Password" type='password' onChange={this.handlePassword.bind(this)}/><br/>
                </Col>
                <Col md={3} mdOffset={4} style={{marginTop: 20}}>
                    <Link to='/ui/signup'>
                        <FlatButton label="Sign up" primary={true}/>
                    </Link>
                    <RaisedButton label="Go" primary={true} onTouchTap={this.handleClick.bind(this)} />
                </Col>
                <Col md={5} style={{marginTop: 20}}>
                    {this.state.resmsg}
                </Col>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Login)