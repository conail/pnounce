const p = require('pronounceable'),
      fs = require('fs'),
      parse = require('csv-parse');

const parser = parse({delimiter: ','}, function(err, data){
    for (let line of data) {
	console.log(`${line[1]}\t${p.test(line[1])}\t${p.score(line[1])}`);
    }
});

fs.createReadStream('tickers.csv').pipe(parser);
