const concat = require('concat-stream');

const input$ = process.stdin;
const output$ = process.stdout;

input$.pipe(
  concat(buffer => {
    const reversedString = buffer
      .toString()
      .split('')
      .reverse()
      .join('');

    output$.end(reversedString);
  })
);
