var assert = require('assert')

describe('Tig', function() {

  var tig = require('../')  

  describe('#name', function() {
    it('should be equal to `tig`', function() {
      assert.equal('tig', tig.name);
    })
  })

  describe('#fetchRepository', function() {
    it('should throw an exception if no valid type is specified', function() {
      assert.throws(function() {
        tig.fetchRepository('foo', {});
      }, Error);
    })
    it('should initialize to an fs type Repository when type is not specified', function() {
      var repo = tig.fetchRepository({});
      assert.equal(repo instanceof tig.Repository, true);
      assert.equal('fs', repo.type);
    })
    it('should initialize to an fs type Repository when type `fs` is specified', function() {
      var repo = tig.fetchRepository('fs', {});
      assert.equal(repo instanceof tig.Repository, true);
      assert.equal('fs', repo.type);
    })
    it('should initialize to a gridfs type Repository when type `gridfs` is specified', function() {
      var repo = tig.fetchRepository('gridfs', {});
      assert.equal(repo instanceof tig.Repository, true);
      assert.equal('gridfs', repo.type);
    })
  })
}) 
