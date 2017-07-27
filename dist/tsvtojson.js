'use strict';

var fs = require('fs');

var tsvtojson = function tsvtojson(filepath, headers) {
	return new Promise(function (resolve, reject) {
		try {
			var tsv = fs.readFileSync(filepath, 'utf8');
			var header = headers || [];
			var json = [];
			tsv.split('\n').forEach(function (line, index) {
				if (!index && !header.length) {
					header = line.split('\t');
				} else {
					var obj = {};
					line.split('\t').forEach(function (value, index) {
						value ? obj[header[index]] = value : '';
					});
					Object.keys(obj).length ? json.push(obj) : '';
				}
			});
			resolve(json);
		} catch (err) {
			reject(err);
		}
	});
};

module.exports = tsvtojson;