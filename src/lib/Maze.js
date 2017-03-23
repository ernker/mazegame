export default class Maze {
    timeout = 0;

    _getPortalPosition(portalType) {
        let coords = {x: -1, y: -1};

        for (let x = 0; x < this.maze.length; x++) {
            for (let y = 0; y < this.maze[x].length; y++) {
                if (this.maze[y][x] === portalType) {
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
        return this.currentCoords;
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
        return x >= 0 && y >= 0 && y < this.maze.length && x < this.maze[y].length
    };

    _checkFree(x, y) {
        return this._checkInMaze(x, y) && this.maze[y][x] !== 1;
    };

    up() {
        this._move(0, -1);
        return this.currentCoords;
    };

    down() {
        this._move(0, 1);
        return this.currentCoords;
    };

    left() {
        this._move(-1, 0);
        return this.currentCoords;
    };

    right() {
        this._move(1, 0);
        return this.currentCoords;
    };

    _move(dx, dy) {
        let that = this;
        
        setTimeout(() => {
            let newCoords = {
                x: that.currentCoords.x + dx,
                y: that.currentCoords.y + dy
            };

            if (that._checkInMaze(newCoords.x, newCoords.y) && that._checkFree(newCoords.x, newCoords.y)) {
                that._setCurrentPosition(newCoords.x, newCoords.y);
            }
        }, this.timeout);
        
        this.timeout += 500;
        
    }

    getNeighbours() {
        let neighbours = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (this._checkFree(this.currentCoords.x + x, this.currentCoords.y + y)) {
                    neighbours[y + 1][x + 1] = this.maze[this.currentCoords.y + y][this.currentCoords.x + x]
                }
            }
        }

        return neighbours;
    };

    isMazeSolved() {
        let exitCoords = this.getExitPosition();
        return this.currentCoords.x === exitCoords.x && this.currentCoords.y === exitCoords.y;
    };

    replay() {
        this.timeout = 0;
        for (let i = 0; i < this.history.length; i++) {
            let that = this;
            setTimeout(function () {
                that._replayPosition(that.history[i].x, that.history[i].y);
            }, this.timeout);
            this.timeout += 500;
        }
    };
};
