require('./skulpt.min.js');
require('./skulpt-stdlib.js');
Sk.externalLibraries = {
          maze: {
            path: './maze/__init__.js'
        }
      };
/* Executes the given code and returns the values of variables in
 * array variables. */
function exec(code, variables) {
  var output = "",
    mainmod,
    result = {'output': output, 'variables': {}},
    varname;
    console.log(Sk.externalLibraries);
    Sk.configure( { output: function(str) { console.log(str) } } );

    try {
    
      Sk.importMainWithBody("<stdin>", false, code);
    } catch (e) {
      return {"output": output, "_error": e.args.v[0].v};
    }
  return result;
}

fs = require('fs');
fs.readFile('./test.py', 'utf8', function (err,data) {
  if (err) {
      return console.log(err);
    }
    console.log(exec(data));
});

