let $builtinmodule = function (name) {
    let mod = {};

    mod.Maze = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function (self, prop) {
            self.prop = prop;
            window.Maze.reset();
            window.Maze.timeout = 0;
        });

        $loc.get_entry_position = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.getEntryPosition());
        });

        $loc.get_exit_position = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.getExitPosition());
        });

        $loc.get_current_position = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.getCurrentPosition());
        });

        $loc.get_neighbours = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.getNeighbours());
        });

        $loc.up = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.up());
        });

        $loc.down = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.down());
        });

        $loc.left = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.left());
        });

        $loc.right = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.right());
        });

        $loc.is_maze_solved = new Sk.builtin.func(function (self) {
            return Sk.ffi.remapToPy(window.Maze.isMazeSolved());
        });
    }, 'Maze', []);

    return mod;
};
