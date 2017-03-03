var $builtinmodule = function(name)
{
    var mod = {};
    
    mod.Maze = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, prop) {
            self.prop = prop;
        });
       
        $loc.getMaze = new Sk.builtin.func(function(self) {
            alert(window.Maze.getMaze());
        });

        $loc.getCurrentPosition = new Sk.builtin.func(function(self) {
            var pos = window.Maze.getCurrentPosition();
            alert(pos.x, pos.y);
        });


        $loc.up = new Sk.builtin.func(function(self) {
            window.Maze.up();
        });

       $loc.down = new Sk.builtin.func(function(self) {
            window.Maze.down();
        });
       $loc.left = new Sk.builtin.func(function(self) {
            window.Maze.left();
        });
       $loc.right = new Sk.builtin.func(function(self) {
            window.Maze.right();
        });

    },'Maze', []);


    return mod;
}
