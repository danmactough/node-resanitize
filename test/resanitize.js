describe('resanitize', function (){
  var assert = require('assert')
    , resanitize = require('../');
  describe('feedsportal', function () {
    it('should strip feedsportal ads', function () {
      var item = require('./fixtures/feedsportal.json');
      assert.equal(resanitize(item.original), item.expected);
    });
  });
  describe('unsafe elements', function () {
    it('should strip unsafe elements', function () {
      var item = require('./fixtures/unsafeElements.json');
      assert.equal(resanitize(item.original), item.expected);
    })
  });
  describe('unsafe attributes', function () {
    it('should strip unsafe attributes', function () {
      var item = require('./fixtures/unsafeAttributes.json');
      assert.equal(resanitize(item.original), item.expected);
    })
  });
});