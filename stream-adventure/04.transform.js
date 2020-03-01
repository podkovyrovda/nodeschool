const through = require("through2");

function write(buffer, encoding, next) {
  const upperStr = buffer.toString().toUpperCase();
  this.push(upperStr);
  next();
}

function end(done) {
  done();
}

const stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);
