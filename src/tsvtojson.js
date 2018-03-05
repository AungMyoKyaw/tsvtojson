const fs = require('fs');

const tsvtojson = (filepath,headers,splitString)=>{
	return new Promise((resolve,reject)=>{
		try{
			let tsv = fs.readFileSync(filepath,'utf8');
			let header = headers || [];
			let json = [];
			let splitString = splitString || '\n'
			tsv.split(splitString).forEach((line,index)=>{
				if(!index && !header.length){
					header = line.split('\t');
				} else {
					let obj = {}
					line.split('\t').forEach((value,index)=>{
						value ? obj[header[index]] = value : '';
					});
					Object.keys(obj).length ? json.push(obj) : '';
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
