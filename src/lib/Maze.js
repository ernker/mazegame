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
        return y in this._maze && x in this._maze[y];
    };

    _checkFree(x, y) {
        return this._maze[y][x] !== 1;
    };

    up() {
        this.move(0, -1);
        return this._curPos;
    };

    down() {
        this.move(0, 1);
        return this._curPos;
    };

    left() {
        this.move(-1, 0);
        return this._curPos;
    };

    right() {
        this.move(1, 0);
        return this._curPos;
    };

    move(dx, dy) {
        let that = this; // Needed to pass 'that' as a new context to 'setTimeout'
        setTimeout(function() {
            let coords = {
                x: that._curPos.x + dx,
                y: that._curPos.y + dy
            };

            if(that._checkInMaze(coords.x, coords.y) && that._checkFree(coords.x, coords.y)) {
                that._setCurrentPosition(coords.x, coords.y);
            }
        }, this._timeout);
    }

    getNeighbours() {
        let neighbours = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        for (let y = - 1; y <= 1; y++) {
            for (let x = - 1; x <= 1; x++) {
                if (this._curPos.x + x >= 0 && this._curPos.y + y >= 0 && this._curPos.x + x < this._maze[this._curPos.y].length && this._curPos.y + y < this._maze.length) {
                    neighbours[y + 1][x + 1] = this._maze[this._curPos.y + y][this._curPos.x + x]
                }
            }
        }

        return neighbours;
    };
};
