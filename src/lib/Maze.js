export default class Maze {
    _timeout = 500;

    constructor(currentCoords, mazeArray, moveBot) {
        this._maze = mazeArray;
        this._curPos = currentCoords;
        this._moveBot = moveBot;
    };

    getMaze() {
        return this._maze;
    };

    _getPortalPosition(portalType) {
        let coords = {x: -1, y: -1};

        for (let x = 0; x < this._maze.length; x++) {
            for (let y = 0; y < this._maze[x].length; y++) {
                if (this._maze[y][x] === portalType) {
                    coords = {x: x, y: y};
                    break;
                }
            }
        }

        return coords;
    };

    getEntryPosition() {
        return this._getPortalPosition(2);
    };

    getExitPosition() {
        return this._getPortalPosition(3);
    };

    getCurrentPosition() {
        return this._curPos;
    };

    _setCurrentPosition(x, y) {
        if (this._checkFree(x, y)) {
            this._curPos = {x: x, y: y};
            this._moveBot(x, y);
        }

        return this._curPos;
    };

    _checkInMaze(x, y) {
        return x >= 0 && y >= 0 && x < this._maze[y].length && y < this._maze.length
    };

    _checkFree(x, y) {
        return this._checkInMaze(x, y) && this._maze[y][x] !== 1;
    };

    up() {
        this._move(0, -1);
        return this._curPos;
    };

    down() {
        this._move(0, 1);
        return this._curPos;
    };

    left() {
        this._move(-1, 0);
        return this._curPos;
    };

    right() {
        this._move(1, 0);
        return this._curPos;
    };

    _move(dx, dy) {
        let newCoords = {
            x: this._curPos.x + dx,
            y: this._curPos.y + dy
        };

        if(this._checkInMaze(newCoords.x, newCoords.y) && this._checkFree(newCoords.x, newCoords.y)) {
            this._setCurrentPosition(newCoords.x, newCoords.y);
        }
    }

    getNeighbours() {
        let neighbours = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        for (let y = - 1; y <= 1; y++) {
            for (let x = - 1; x <= 1; x++) {
                if (this._checkFree(this._curPos.x + x, this._curPos.y + y)) {
                    neighbours[y + 1][x + 1] = this._maze[this._curPos.y + y][this._curPos.x + x]
                }
            }
        }

        return neighbours;
    };
};
