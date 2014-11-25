var fs = require('fs')
  , async = require('async');

function processDir(dir, next) {
  fs.readdir(dir, function(err, files) {
    if (err) console.error(err);
    var tmpl = {};
    async.forEach(files, function(file, callback) {
      fs.stat(dir + '/' + file, function(err, stats) {
        if (err) console.error(err);
        if (stats.isDirectory()) {
          processDir(dir + '/' + file, function(tmp) {
            tmpl[file] = tmp;
          });
        } else if (stats.isFile()) {
          fs.readFile(dir + '/' + file, { encoding: 'utf8' }, function(err, data) {
            if (err) console.error(err);
            tmpl[file] = data;
          })
        }
      })
      callback();
    }, function(err) {
      next(tmpl);
    })
  })
}

processDir(__dirname + '/data', function(tmpl) {
  console.log(JSON.stringify(tmpl));
})
