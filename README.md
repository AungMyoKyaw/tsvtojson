# tsvtojson

> A simple and lightweight library to convert TSV (Tab-Separated Values) files to JSON

[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

## Features

- Convert TSV files to JSON arrays
- Support for custom headers
- Configurable line split string
- Promise-based API for async operations
- Lightweight with zero runtime dependencies

## Installation

```shell
npm install tsvtojson
```

## Usage

### Basic Example

```javascript
const tsvtojson = require('tsvtojson');

tsvtojson('./file.tsv')
  .then(data => {
    console.log(data);
    // Output: [{ column1: 'value1', column2: 'value2', ... }]
  })
  .catch(err => {
    console.error(err);
  });
```

### With Custom Headers

```javascript
const tsvtojson = require('tsvtojson');

tsvtojson('./file.tsv', ['name', 'email', 'role'])
  .then(data => {
    console.log(data);
  });
```

### With Custom Line Splitter

```javascript
const tsvtojson = require('tsvtojson');

tsvtojson('./file.tsv', ['name', 'email'], '\r\n')
  .then(data => {
    console.log(data);
  });
```

## API

### tsvtojson(filepath, [headers], [splitString])

Returns a Promise that resolves to an array of objects.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| filepath | string | Yes | - | Path to the TSV file |
| headers | string[] | No | First row of file | Array of header names for the resulting objects |
| splitString | string | No | `\n` | String used to split lines |

## Example TSV File

```
name	email
John Doe	john@example.com
Jane Smith	jane@example.com
```

Converts to:

```json
[
  { "name": "John Doe", "email": "john@example.com" },
  { "name": "Jane Smith", "email": "jane@example.com" }
]
```

## Development

### Setup

```shell
git clone https://github.com/AungMyoKyaw/tsvtojson.git
cd tsvtojson
npm install
```

### Build

```shell
npm run build
```

### Test

```shell
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## LICENSE

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/tsvtojson/issues
[npm-download]: https://img.shields.io/npm/dt/tsvtojson.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/tsvtojson
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
