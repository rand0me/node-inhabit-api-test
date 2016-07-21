require('chai').should();
var index = require(__BASE + '/src/index');

describe('index', function() {
  it('is object', function() {
    index.should.be.an('object');
  });

  it('exports jquery', function() {
    index.$.should.be.a('function');
  });

  it('exports handlebars', function() {
    index.handlebars.should.be.an('object');
  });

  it('exports textClassification', function() {
    index.textClassification.should.be.an('object');
  });
});
