
export default class Maze {
    constructor() {
        this.curPos = this.getInitPosition();

        this._maze = [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }

    getMaze() {
        return this._maze;
    }

    getInitPosition() {
        return {x: 0, y: 0};
    }

    getExitPosition() {
        return {x: 10, y: 10};
    }

    getCurrentPosition() {
        return this.curPos;
    }

    setCurrentPosition(x, y) {
        if(this.checkFree(x,y)) {
            this.curPos = {x: x, y: y};
        }

        return this.curPos;
    }
    checkInMaze(x,y) {
        return x in this._maze && y in this._maze[x];
    }
    checkFree(x, y) {
        return this._maze[x][y] === 0;
    }

    up() {
        let pos = this.getCurrentPosition();

        pos.y = pos.y - 1;

        if(this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this.setCurrentPosition(pos.x, pos.y);
        }

        return this.curPos;
    }

    down() {
        let pos = this.getCurrentPosition();

        pos.y = pos.y + 1;

        if(this.checkInMaze(pos.x, pos.y) && this.checkFree(pos.x, pos.y)) {
            this.setCurrentPosition(pos.x, pos.y);
        }

        return this.curPos;
    }


}
