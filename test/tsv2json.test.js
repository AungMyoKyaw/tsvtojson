var chai = require('chai');
var should = chai.should();
var tsv2json = require('../dist/tsvtojson');

describe('tsvtoson test',function(){
	it('convert tsv to json',function(done){
		tsv2json('test/test.tsv',['name','github'])
			.then(data=>{
				data[0].should.include.all.keys('name','github')
			})
			.catch(err=>{
				process.exit(1);
			})
		done();
	})
})
