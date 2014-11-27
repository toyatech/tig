var util = require('util')
  , fs = require('fs')
  , path = require('path')
  , mkdirp = require('mkdirp');

module.exports = exports = FSRepository;

function FSRepository(options) {
  options = options || {};
  this._dir = options.directory;
}

FSRepository.prototype.init = function(options, callback) {

}

function findFSRepository(p, callback) {
  var parts = p.split(path.sep);
  for (var i=parts.length;i > 0; i--) {
    var dir = path.join(parts.slice(0,i));
  fs.exists(dir, function(exists) {
    if (exists) {
      fs.stats(dir, function(err, stats) {
        if (stats.isDirectory()) {
          // at a minimum a .git directory should contain a config file that
          // points to a remote repository
          fs.exists(path.join(dir, '/config'), function(exists) {
            if (!exists) {
              callback(new Error('Found .git directory at `' + dir '` without config file'));
            } else {
              callback(null, dir);
            }
          })
        } else {
          callback(new Error('`' + dir '` is not a directory'));
        }
      })
    } else {
      findFSRepository(path.dirname(p), callback)
}

FSRepository.findFSRepository = function(cwd, callback) {
  var dir = path.join(cwd, '.git');
  fs.exists(dir, function(exists) {
    if (exists) {
      fs.stats(dir, function(err, stats) {
        if (stats.isDirectory()) {
          // at a minimum a .git directory should contain a config file that
          // points to a remote repository
          fs.exists(path.join(dir, '/config'), function(exists) {
            if (!exists) {
              callback(new Error('Found .git directory at `' + dir '` without config file'));
            } else {
              callback(null, dir);
            }
          })
        } else {
          callback(new Error('`' + dir '` is not a directory'));
        }
      })
    } else {
      
}
