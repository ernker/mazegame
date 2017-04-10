import React from 'react'

export default class Pythonlibdoc extends React.Component {

    render() {
        return (

            <div>
                <h2>Python Lib doc</h2>
                <p style={{ fontWeight: 'bold'}}>
                    Initialize Maze instance:
                </p>
                <p>
                    from maze import Maze<br/>
                    m = Maze()<br/>
                </p>
                <p style={{ fontWeight: 'bold'}}>
                    At first, it is Start coordinates, otherwise this call gives current location:
                </p>
                <p>
                    m.getCurrentPosition()
                </p>
            </div>
        )
    }
}
