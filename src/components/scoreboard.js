import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import If from '../lib/if';
import Halogen from 'halogen';
import {Col} from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      status: false
    }
  }

  componentDidMount() {
    fetch('https://cloudsquad.lt/api/overall_scoreboard')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Internal server error');
    }).then(rez => {
      this.setState({data: rez, status: true})
    }).catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));
  }

  render() {

    const color = '#00bcd4';

    return (
      <div>
          <If cond={!this.state.status}>
            <div style={{
              margin: 'auto auto'
            }}>
              <Halogen.PulseLoader color={color}/>
            </div>
          </If>
          <If cond={this.state.status}>
              <table className="table">
                <thead className="thead-inverse">
                  <tr>
                      <th>Rank</th>
                      <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((row, index) => (
                    <tr>
                      <td >{row.rank}</td>
                      <td>{row.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </If>
      </div>
    );
  }
}

export default Scoreboard;
