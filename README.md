# tsvtojson

## Installation
```
npm install --save tsvtojson
```

## Example
```
const tsvtojson = require('tsvtojson');
tsvtojson('./file/path.ext',['header1','header2','header3'])
	.then(data=>{
		console.log(data);
	})
	.catch(err=>{
		console.log(err);
	})
```
