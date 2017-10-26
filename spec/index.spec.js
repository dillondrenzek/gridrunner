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





  describe('instance', function() {

    let instance;

    // Helper: expects a property on instance
    const expectProp = (propName) => {
      return it(propName, function() {
        expect(instance.hasOwnProperty(propName)).toBe(true);
      });
    }

    beforeEach(function() {
      instance = gridrunner();
    });

    describe('should have the property:', function() {
      expectProp('grid');
      expectProp('player');
      expectProp('CellTypeEnum');
    });
  });
});
