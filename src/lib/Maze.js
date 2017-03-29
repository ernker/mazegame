const EntryPortal = 2;
const ExitPortal = 3;

class Maze {
    constructor(maze) {
        this._maze = maze;
        this.reset();
    }

    static getPortalPosition(maze, portalType) {
        let coords = {x: -1, y: -1};

        for (let x = 0; x < maze.length; x++) {
            for (let y = 0; y < maze[x].length; y++) {
                if (maze[y][x] === portalType) {
                    coords = {x: x, y: y};
                    break;
                }
            }
        }

        return coords;
    };

    getEntryPosition() {
        return Maze.getPortalPosition(this._maze, EntryPortal);
    };

    getCurrentPosition() {
        return this._currentCoords;
    };

    _setCurrentPosition(x, y) {
        if (this._checkFree(x, y)) {
            this._currentCoords = {x: x, y: y};
            this._history.push(this._currentCoords);
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
        let exitCoords = Maze.getPortalPosition(this._maze, ExitPortal);
        return this._currentCoords.x === exitCoords.x && this._currentCoords.y === exitCoords.y;
    };

    reset() {
        this._currentCoords = this.getEntryPosition();
        this._history = [this._currentCoords];
    }

    getHistory() {
        return this._history;
    }
}

export {Maze, EntryPortal, ExitPortal};
