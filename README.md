# tsvtojson

> tsv <=> json

[![Build Status][travis]][travis-url]
[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

## Installation

```shell
npm install --save tsvtojson
```

## Example

```javascript
const tsvtojson = require('tsvtojson');
tsvtojson('./file/path.ext', ['header1', 'header2', 'header3'])
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
```

## LICENSE

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/tsvtojson/issues
[travis]: https://img.shields.io/travis/AungMyoKyaw/tsvtojson/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AungMyoKyaw/tsvtojson
[npm-download]: https://img.shields.io/npm/dt/tsvtojson.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/tsvtojson
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
