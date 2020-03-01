const trumpet = require('trumpet');
const through = require('through2');
const tr = trumpet();

const loud = tr.select('.loud').createStream();

function upperCase(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

loud.pipe(through(upperCase)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);

