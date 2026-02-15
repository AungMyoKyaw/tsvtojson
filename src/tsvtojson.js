const fs = require('fs');

/**
 * Converts a TSV file to JSON
 * @param {string} filepath - Path to the TSV file
 * @param {string[]} [headers] - Optional array of header names. If not provided, first row is used
 * @param {string} [splitString='\n'] - String used to split lines
 * @returns {Promise<Object[]>} Promise that resolves to an array of objects
 * @example
 * // Basic usage
 * tsvtojson('./file.tsv')
 *   .then(data => console.log(data));
 *
 * @example
 * // With custom headers
 * tsvtojson('./file.tsv', ['name', 'email', 'role'])
 *   .then(data => console.log(data));
 */
const tsvtojson = (filepath, headers, splitString) => {
  return new Promise((resolve, reject) => {
    try {
      const tsv = fs.readFileSync(filepath, 'utf8');
      let header = headers || [];
      const json = [];
      const lineSplit = splitString || '\n';

      tsv.split(lineSplit).forEach((line, index) => {
        if (!index && !header.length) {
          header = line.split('\t');
        } else {
          const obj = {};
          line.split('\t').forEach((value, idx) => {
            if (value) {
              obj[header[idx]] = value;
            }
          });
          if (Object.keys(obj).length) {
            json.push(obj);
          }
        }
      });

      resolve(json);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = tsvtojson;
