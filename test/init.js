var assert = require('assert')

var ResponseGenius = require('../index');

describe('handle initialization', function () {
  it('should fail for no api key', function () {
    assert.throws(function () {
      var responseGenius = new ResponseGenius(null);
    })
  })
});
