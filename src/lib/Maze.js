export default class Maze {
    constructor(currentCoords, mazeArray) {
        this._maze = mazeArray;
        this._curPos = currentCoords;
    };

    getMaze() {
        return this._maze;
    };

    getExitPosition() {
        let coords = {x: -1, y: -1};

        for (let x = 0; x < this._maze.length; x++) {
            for (let y = 0; y < this._maze[x].length; y++) {
                if (this._maze[y][x] === 3) {
                    coords = {x: x, y: y};
                    break;
                }
            }
        }

        return coords;
    };

    getCurrentPosition() {
        return this._curPos;
    };

    _setCurrentPosition(x, y) {
        if (this.checkFree(x, y)) {
            this._curPos = {x: x, y: y};
            window.Maze.dispatch(x, y);
        }

        return this._curPos;
    };

    checkInMaze(x, y) {
        return y in this._maze && x in this._maze[y];
    };

    checkFree(x, y) {
        return this._maze[y][x] === 0;
    };

    up() {
        let pos = this._curPos;

        pos.y = pos.y - 1;

        if (this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this._setCurrentPosition(pos.x, pos.y);
        }

        return this._curPos;
    };

    down() {
        let pos = this._curPos;

        pos.y = pos.y + 1;

        if (this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this._setCurrentPosition(pos.x, pos.y);
        }

        return this._curPos;
    };

    left() {
        let pos = this._curPos;

        pos.x = pos.x - 1;

        if (this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this._setCurrentPosition(pos.x, pos.y);
        }

        return this._curPos;
    };

    right() {
        let pos = this._curPos;

        pos.x = pos.x + 1;

        if (this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this._setCurrentPosition(pos.x, pos.y);
        }

        return this._curPos;
    };
};
