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


        $loc.up = new Sk.builtin.func(function(self) {
            window.Maze.up();
        });
    },'Maze', []);


    return mod;
}
