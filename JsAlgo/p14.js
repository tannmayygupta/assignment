const fs = require('fs');
const { Parser } = require('json2csv');

const data = [{ name: 'Tanmay', age: 21 }];
const parser = new Parser();
const csv = parser.parse(data);

fs.writeFileSync('data.csv', csv);
