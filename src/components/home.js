import React from "react";
import logo from '../img/713757da03c8b9fc273ab046efacafec.png';
import {Col} from "react-bootstrap";
import RulesOfGame from "./rulesofgame.js";
import Pythonlibdoc from './pythonlibdoc.js';


export const Home = ({ match }) => {
    return (
        <div>
            <Col md={8} mdOffset={4}> 
                <img src={logo}  role="presentation" style={{ height: 200, width: 200}} />
            </Col>
            <Col md={5} mdOffset={1}>
                <RulesOfGame />
            </Col>
            <Col md={5}>
                <Pythonlibdoc />
            </Col>
        </div>
    )
}