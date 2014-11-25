
module.exports = exports = Repository;

var _REPO_TYPES = [ 'fs', 'gridfs' ];

function Repository(type, options) {
  if (!(this instanceof Repository))
    return new Repository(type, options);
  if (typeof type === 'object') {
    options = type
    type = 'fs';
  }
  this.type = type;
  if (!(_REPO_TYPES.indexOf(type) > -1))
    return new Error(type + ' is not a valid repository type!');
  this._repo = require('./' + type + '-repository')(options);
}

var template = {
  branches: {},
  config: '[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = %s',
  description: 'Unnamed repository; edit this file \'description\' to name the repository.',
  HEAD: 'ref: refs/heads/master',
  hooks: {
    'applypatch-msg.sample': '#!/bin/sh\n#\n# An example hook to check the commit log message taken by\n# applypatch from an e-mail message.\n#\n# The hook should exit with non-zero status after issuing an\n# appropriate message if it wants to stop the commit.  The hook is\n# allowed to edit the commit message file.\n#\n# To enable this hook, rename this file to "applypatch-msg".\n\n. git-sh-setup\ntest -x "$GIT_DIR/hooks/commit-msg" &&\n\texec "$GIT_DIR/hooks/commit-msg" ${1+"$@"}\n:',
    'commit-msg.sample': '',
    'post-commit.sample': '',
    'post-receive.sample': ''
  }
}
    

// TODO: implement templates, separate-git-dir, and shared repos
Repository.prototype.init = function(options, callback) {
  options = options || {};
  options.bare = options.bare || true;
  this._repo.init(options);
}

Repository.prototype.hashObject = function(options, callback) {
}
