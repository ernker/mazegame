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
    fetch('https://demo4370489.mockable.io/api/message').then(res => {
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

    console.log('Data status: ', this.state.data)

    return (
      <div>
        <Col md={2} mdOffset={5}>
          <If cond={!this.state.status}>
            <div style={{
              marginTop: 200
            }}>
              <Halogen.PulseLoader color={color}/>
            </div>
          </If>
        </Col>
        <Col md={10} mdOffset={1}>
          <If cond={this.state.status}>
            <div style={{
              marginTop: 50
            }}>
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Rank</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} stripedRows={true}>
                  {this.state.data.map((row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn >{row.rank}</TableRowColumn>
                      <TableRowColumn>{row.username}</TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </If>
        </Col>
      </div>
    );
  }
}

export default Scoreboard;