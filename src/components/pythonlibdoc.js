import React from 'react'

export default class Pythonlibdoc extends React.Component {

    render() {
        return (
            <div>
                <h3>Python Lib docs</h3>
                <h4>Python maze lib docs</h4>
                <sub>
                    The Maze class will be instantiated for you and assigned to the 'maze' variable,
                    so you don't have to do it. All API calls should be made using that instance.
                    The following code
                    <b>should not be included</b>:
                </sub>
                <p>
                    from maze import Maze<br/>
                    maze = Maze()<br/>
                </p>
                <sub>
                    At first, it is Start coordinates, otherwise this call gives current location:
                </sub>
                <p>
                    get_current_position()
                </p>
                <p>
                    get_entry_position()
                </p>
                <p>
                    get_neighbours()
                </p>
                <p>
                    up()
                </p>
                <p>
                    down()
                </p>
                <p>
                    left()
                </p>
                <p>
                    right()
                </p>
                <p>
                    is_maze_solved()
                </p>
            </div>
        )
    }
}
