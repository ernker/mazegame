let $builtinmodule = function (name) {
    let mod = {};

    mod.Maze = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function (self, prop) {
            self.prop = prop;
        });

        $loc.get_entry_position = new Sk.builtin.func(function (self) {
            return window.Maze.getEntryPosition();
        });

        $loc.get_exit_position = new Sk.builtin.func(function (self) {
            return window.Maze.getExitPosition();
        });

        $loc.get_maze = new Sk.builtin.func(function (self) {
            return window.Maze.getMaze();
        });

        $loc.get_current_position = new Sk.builtin.func(function (self) {
            return window.Maze.getCurrentPosition();
        });

        $loc.get_neighbours = new Sk.builtin.func(function (self) {
            return window.Maze.getNeighbours();
        });

        $loc.up = new Sk.builtin.func(function (self) {
            return window.Maze.up();
        });

        $loc.down = new Sk.builtin.func(function (self) {
            return window.Maze.down();
        });

        $loc.left = new Sk.builtin.func(function (self) {
            return window.Maze.left();
        });

        $loc.right = new Sk.builtin.func(function (self) {
            return window.Maze.right();
        });
    }, 'Maze', []);

    return mod;
};
