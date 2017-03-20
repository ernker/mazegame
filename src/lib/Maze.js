export default class Maze {
    constructor(currentCoords, maze, history, moveBot, replay, reset) {
        this._currentCoords = currentCoords;
        this._maze = maze;
        this._history = history;

        this._moveBot = moveBot;
        this._replay = replay;
        this.reset = reset;
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
        return this._currentCoords;
    };

    _setCurrentPosition(x, y) {
        if (this._checkFree(x, y)) {
            this._moveBot(x, y);
        }
    };

    _replayPosition(x, y) {
        if (this._checkFree(x, y)) {
            this._replay(x, y);
        }
    };

    _checkInMaze(x, y) {
        return x >= 0 && y >= 0 && y < this._maze.length && x < this._maze[y].length
    };

    _checkFree(x, y) {
        return this._checkInMaze(x, y) && this._maze[y][x] !== 1;
    };

    up() {
        this._move(0, -1);
        return this._currentCoords;
    };

    down() {
        this._move(0, 1);
        return this._currentCoords;
    };

    left() {
        this._move(-1, 0);
        return this._currentCoords;
    };

    right() {
        this._move(1, 0);
        return this._currentCoords;
    };

    _move(dx, dy) {
        let newCoords = {
            x: this._currentCoords.x + dx,
            y: this._currentCoords.y + dy
        };

        if (this._checkInMaze(newCoords.x, newCoords.y) && this._checkFree(newCoords.x, newCoords.y)) {
            this._setCurrentPosition(newCoords.x, newCoords.y);
        }
    }

    getNeighbours() {
        let neighbours = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (this._checkFree(this._currentCoords.x + x, this._currentCoords.y + y)) {
                    neighbours[y + 1][x + 1] = this._maze[this._currentCoords.y + y][this._currentCoords.x + x]
                }
            }
        }

        return neighbours;
    };

    isMazeSolved() {
        let exitCoords = this.getExitPosition();
        return this._currentCoords.x === exitCoords.x && this._currentCoords.y === exitCoords.y;
    };

    replay() {
        this._timeout = 0;
        for (let i = 0; i < this._history.length; i++) {
            let that = this;
            setTimeout(function () {
                that._replayPosition(that._history[i].x, that._history[i].y);
            }, this._timeout);
            this._timeout += 500;
        }
    };
};
