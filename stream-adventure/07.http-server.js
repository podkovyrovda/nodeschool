const http = require("http");
const through = require("through2");

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

const server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(through(write, end)).pipe(res);
  }
});

server.listen(process.argv[2]);
