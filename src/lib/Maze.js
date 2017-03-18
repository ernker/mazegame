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
        let that = this; // Needed to pass new context to setTimeout
        setTimeout(function() {
            const pos = {
                x: that._curPos.x + dx,
                y: that._curPos.y + dy
            };

            if(that._checkInMaze(pos.x, pos.y) && that._checkFree(pos.x, pos.y)) {
                that._setCurrentPosition(pos.x, pos.y);
            }
        }, this._timeout);
    }

    getNeighbours() {
        let neighbours = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        for (let x = this._curPos.x - 1; x <= this._curPos.x + 1; x++) {
            for (let y = this._curPos.y - 1; y <= this._curPos.y + 1; y++) {
                if (x >= 0 || y >= 0 || x < this._maze[y].length || y < this._maze.length) {
                }
            }
        }
    };
};
