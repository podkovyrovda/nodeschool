const split = require("split");
const through2 = require("through2");

let isOdd = true;

function write(buffer, encoding, next) {
  const line = buffer.toString();

  if (isOdd) {
    console.log(line.toLowerCase());
  } else {
    console.log(line.toUpperCase());
  }

  isOdd = !isOdd;

  next();
}

process.stdin.pipe(split()).pipe(through2(write));
