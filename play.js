const connect = require('./client');

console.log("connecting ... ");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  };
};

process.stdin.on("data", handleUserInput);

connect();