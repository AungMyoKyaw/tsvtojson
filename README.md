# tsvtojson
> tsv <=> json

[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri-badge]][contri-url]

## Installation
```
npm install --save tsvtojson
```

## Example
```javascript
const tsvtojson = require('tsvtojson');
tsvtojson('./file/path.ext',['header1','header2','header3'])
	.then(data=>{
		console.log(data);
	})
	.catch(err=>{
		console.log(err);
	})
```

## License
[MIT](./LICENSE)

[contri-badge]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat
[contri-url]: https://github.com/AungMyoKyaw/tsvtojson/issues
[npm-download]: https://img.shields.io/npm/dt/tsvtojson.svg
[npm-dl-url]: https://www.npmjs.com/package/tsvtojson

