import React from 'react'
import logo from '../../public/img/713757da03c8b9fc273ab046efacafec.png'

export default class RulesOfGame extends React.Component {

    render() {
        return (

            <div className='rules-main-text'>
                <div style={{ textAlign: 'center'}}>
                    <img src={logo}  role="presentation" style={{ height: 200, width: 200}}/>
                </div>
                <br />
                <h1 style={{ textAlign: 'center', fontSize: 30}}>Rules of the Game</h1>
                <br />
                <ul>
                    <li>The Maze is a square 2D matrix containing corridors(0), walls (1), an entry (2) and an exit (3)
                        Example:
                        <br />
                        <br />
                        <p style={{ textAlign: 'center'}}>
                            1 1 3 1 <br />
                            1 0 0 1 <br />
                            1 2 1 1 <br />
                            1 1 0 1 <br />
                        </p>
                    </li>
                    <br />
                    <li>
                        The bot can only move up(), down(), left() and right(). These calls return the position of the
                        bot after moving in &#123;'x'&#58; x, 'y'&#58; y&#125; format.
                    </li>
                    <br />
                    <li>
                        The get_neighbours() API call reveals 9 surrounding cells, the bot being in the middle as
                        follows: <br />
                        [[1,1,3], [1,0,0], [1,2,1]]
                    </li>
                    <br />
                    <li>
                        The coordinate system starts at the top left corner of the maze, all coordinates given in &#123;
                        'x'&#58; x, 'y'&#58; y&#125; format, coordinates start from 1
                    </li>
                </ul>
            </div>
        )
    }
}

