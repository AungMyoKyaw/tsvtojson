const fs = require('fs');

function tsvtojson(filepath,headers){
	return new Promise((resolve,reject)=>{
		try{
			let tsv = fs.readFileSync(filepath,'utf8');
			let header = headers || [];
			let json = [];
			tsv.split('\n').forEach((line,index)=>{
				if(!index && !header.length){
					header = line.split('\t');
				} else {
					let obj = {}
					line.split('\t').forEach((value,index)=>{
						obj[header[index]] = value;
					});
					json.push(obj);
				}
			});
			resolve(json);
		}
		catch(err){
			reject(err);
		}
	})
}

module.exports = tsvtojson;
