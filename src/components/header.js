import React from "react";
import {connect} from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import {getStyles} from 'material-ui/AppBar/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    static get contextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }

    handleTouchTap() {
        this.setState({ open: !this.state.open })
    }

    render() {

        const style = getStyles(this.props, this.context);
        console.log(style)
        const elemRight = (
            <div>
                <Link to='/mazegame'>
                    <FlatButton label="MAZE GAME" style={style.flatButton}/>
                </Link>
                <Link to='/signup'>
                  <FlatButton label="SIGN UP" style={style.flatButton}/>
                </Link>
                <Link to='/login'>
                    <FlatButton label="LOGIN" style={style.flatButton}/>
                </Link>
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
                    <MenuItem primaryText='Info'/>
                </Drawer>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps)(Header)
