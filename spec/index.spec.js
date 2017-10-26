let helpers = require('./helpers');
let gridrunner = require('../index');


describe('Gridrunner', function() {

  describe('exported function', function() {

    it('should be a function', function() {
      expect(typeof gridrunner).toBe('function');
    });

    it('returns an object', function() {
      expect(typeof gridrunner()).toBe('object');
    });

  });





  describe('instance created with no options', function() {

    let instance;

    beforeEach(function() {
      instance = gridrunner();
    });

    describe('should have the property:', function() {
      it('grid', function() {
        expect(instance.hasOwnProperty('grid')).toBe(true);
      });
      it('player', function() {
        expect(instance.hasOwnProperty('player')).toBe(true);
      });
      it('CellTypeEnum', function() {
        expect(instance.hasOwnProperty('CellTypeEnum')).toBe(true);
      });
    });
  });






  describe('instance created with valid options object', function() {

    let instance, opts;



    beforeEach(function() {
      opts = {
        start: [0,0],
        finish: [3,0],
        walls: [ [2,2], [3,2] ],
        size: {
          width: 4,
          height: 3
        }
      };
      instance = gridrunner(opts);
    });

    describe('should have the property:', function() {
      it('grid', function() {
        expect(instance.hasOwnProperty('grid')).toBe(true);
      });
      it('player', function() {
        expect(instance.hasOwnProperty('player')).toBe(true);
      });
      it('CellTypeEnum', function() {
        expect(instance.hasOwnProperty('CellTypeEnum')).toBe(true);
      });
    });




  });






});
