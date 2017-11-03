const gridrunner = require('../index');
const { CellTypeEnum } = gridrunner;

// shorthand for readability
const CellType = CellTypeEnum.full;





describe('Gridrunner', function() {

  describe('exported module', function() {

    it('should be an object', function() {
      expect(typeof gridrunner).toBe('object');
    });

    it('should contain the Gridrunner factory method', function() {
      expect(typeof gridrunner.gridrunner).toBe('function');
    });

    it('should contain an enum with information about the different cell types', function() {
      expect(typeof gridrunner.CellTypeEnum).toBe('object');
    });

  });




  describe('game instance created with valid config object', function() {


    const valid_config = {
        start: [0,0],
        finish: [3,0],
        walls: [ [2,2], [3,2] ],
        width: 4,
        height: 3
      };

    let game, config, positions;

    beforeEach(function() {
      config = valid_config;
      game = gridrunner.gridrunner(config);
    });



    it('should not throw', function() {
      expect(() => gridrunner.gridrunner(config)).not.toThrow();
    });

  });





  describe('instance created with invalid config objects:', function() {

    const itShouldThrow = (desc, test_config) => {
      it(desc, function() {
        expect(() => gridrunner.gridrunner(test_config)).toThrow();
      });
    };

    itShouldThrow('falsy value', null);
    itShouldThrow('non-object', 0);
    itShouldThrow('blank object', {});

  });

});
