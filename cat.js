const fs = require('fs')

module.exports = function(done, filename){
  fs.readFile(filename, 'utf8', (err, fileContent) => {
    if (err){
      done(err.stack)
    } else {
      done(fileContent)
    }
  });
}
