var $builtinmodule = function (name) {
    return Maze;
};

function Maze = function (param) {
    this.param = param; 

    this.$up = function () {
        console.log('Up -> ' + param);
    }
}
