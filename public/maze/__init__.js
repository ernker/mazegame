var $builtinmodule = function(name)
{
    var mod = {};
    
    mod.Maze = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, prop) {
            self.prop = prop;
        });
     
        $loc.up = new Sk.builtin.func(function(self) {
            console.log('UP! '+self.prop);
      });
    },'Maze', []);


    return mod;
}
