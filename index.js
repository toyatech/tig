var package = require('./package.json');

var Repository = require('./lib/repository');

exports.NAME = package.name;
exports.VERSION = package.version;
exports.DESCRIPTION = package.description;

exports.Repository = Repository;

exports.fetchRepository = function(type, options) {
  var repo = new Repository(type, options);
  if (repo instanceof Error) {
    throw repo; 
    return;
  }
  return repo;
}
