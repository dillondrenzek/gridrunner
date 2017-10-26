let gridrunner = require('../index.js');


describe('Gridrunner', function() {

  describe('exported function', function() {

    it('should be a function', function() {
      expect(typeof gridrunner).toBe('function');
    });

    it('returns an object', function() {
      expect(typeof gridrunner()).toBe('object');
    });

  });

});
