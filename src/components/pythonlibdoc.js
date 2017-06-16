import React from 'react'

export default class Pythonlibdoc extends React.Component {

    render() {
        return (
            <div className='rules-main-text'>
                <h1 style={{ textAlign: 'center', fontSize: 30}}>Python Library documentation</h1><br />
                <sub>
                    The Maze class will be instantiated for you and assigned to the 'maze' variable,
                    so you don't have to do it. All API calls should be made using that instance.
                    The following code <span style={{ fontWeight: 'bold'}}>should not be included:</span>
                </sub>
                <br />
                <br />
                <p style={{ textAlign: 'center',fontWeight: 'bold'}}>
                    from maze import Maze <br />
                    maze = Maze()<br/>
                </p>
                <br />
                <br />
                <p style={{ textAlign: 'center', fontWeight: 'bold'}}>
                    All API calls
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    At first, it is Start coordinates, otherwise this call gives currennt location: <br/>
                    get_current_position()
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    get_entry_position()
                </p><br />
                <p style={{ textAlign: 'center' }}>
                    get_neighbours()
                </p><br />
                <p style={{ textAlign: 'center' }}>
                    up()
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    down()
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    left()
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    right()
                </p><br />
                <p style={{ textAlign: 'center'}}>
                    is_maze_solved()
                </p><br />
            </div>
        )
    }
}
