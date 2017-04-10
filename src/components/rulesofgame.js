import React from 'react'

export default class RulesOfGame extends React.Component {

    render() {
        return (

            <div>
                <h2>Rules of the Game</h2>
                <ul>
                    <li>The Maze is a square 2D matrix containing corridors(0), walls (1), an entry (2) and an exit (3)
                        Example:
                        <p>
                            1 1 3 1 <br />
                            1 0 0 1 <br />
                            1 2 1 1 <br />
                            1 1 0 1 <br />
                        </p>
                    </li>
                    <li>
                        The bot can only move up(), down(), left() and right(). These calls return the position of the
                        bot after moving in &#123;'x'&#58; x, 'y'&#58; y&#125; format
                    </li>
                    <li>
                        The get_neighbours() API call reveals 9 surrounding cells, the bot being in the middle as
                        follows:
                        [[1,1,3], [1,0,0], [1,2,1]]
                    </li>
                    <li>
                        The coordinate system starts at the top left corner of the maze, all coordinates given in &#123;
                        'x'&#58; x, 'y'&#58; y&#125; format, coordinates start from 1
                    </li>
                </ul>
            </div>
        )
    }
}

