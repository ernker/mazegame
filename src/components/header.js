import React from "react";
import {connect} from "react-redux";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {getStyles} from 'material-ui/AppBar/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import If from '../lib/if';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            open: false,
        };
    }

    static get contextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }

    handleTouchTap() {
        this.setState({ open: !this.state.open })
    }

    handleLogout(e) {
        e.preventDefault;
        this.props.dispatch({type: 'LOGOUT'});
        this.props.history.push('/');
    }

    render() {
        const {isAuthenticated} = this.props
        
        const Element = () => {
            if (!isAuthenticated) {
                return (
                    <Link to='/login'>
                        <FlatButton label="LOG IN" style={style.flatButton}/>
                    </Link>
                )
            } else {
               return (<FlatButton label='LOG OUT' onTouchTap={this.handleLogout.bind(this)} style={style.flatButton}/>)
            }
        }
        
        const style = getStyles(this.props, this.context);
        const elemRight = (
            <div>
                <Link to='/'>
                    <FlatButton label="HOME" style={style.flatButton}/>
                </Link>
                <Link to='/scoreboard'>
                    <FlatButton label="LEADER BOARD" style={style.flatButton}/>
                </Link>
                <Link to='/mazegame'>
                    <FlatButton label="MAZE GAME" style={style.flatButton}/>
                </Link>
                <If cond={!this.props.isAuthenticated}>
                    <Link to='/signup'>
                        <FlatButton label="SIGN UP" style={style.flatButton}/>
                    </Link>
                </If>
                <Element />
            </div>
        )

        return (
            
            <div>
                <AppBar title='Maze game' onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)} iconElementRight={elemRight} />
                <Drawer docked={false} onRequestChange={(open) => this.setState({open})} open={this.state.open}>
                    <Link to='/'>
                        <MenuItem primaryText='Home'/>
                    </Link>
                    <Link to='/mazegame'>
                        <MenuItem primaryText='Maze game'/>
                    </Link>
                    <Link to='/scoreboard'>
                        <MenuItem primaryText='Scoreboard'/>
                    </Link>
                </Drawer>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Header)
