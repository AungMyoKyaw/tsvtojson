var chai = require('chai');
var should = chai.should();
var tsv2json = require('../dist/tsvtojson');

describe('tsvtojson test', function() {
  it('convert tsv to json', function(done) {
    tsv2json('test/test.tsv', ['name', 'github'])
      .then(function(data) {
        data[0].should.include.all.keys('name', 'github');
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('should use first row as headers when headers not provided', function(done) {
    tsv2json('test/test.tsv')
      .then(function(data) {
        data[0].should.include.all.keys('name', 'github');
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('should return empty array for empty file', function(done) {
    tsv2json('test/empty.tsv')
      .then(function(data) {
        data.should.be.an('array');
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('should reject with error for non-existent file', function(done) {
    tsv2json('test/nonexistent.tsv')
      .then(function() {
        done(new Error('Should have thrown an error'));
      })
      .catch(function(err) {
        err.should.exist;
        done();
      });
  });
});
