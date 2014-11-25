var util = require('util')
  , fs = require('fs')
  , mkdirp = require('mkdirp');

module.exports = exports = FSRepository;

function FSRepository(options) {
  options = options || {};
  this._dir = options.directory;
}

FSRepository.prototype.init = function(options, callback) {

}
