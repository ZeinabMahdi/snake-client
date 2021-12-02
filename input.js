// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(input) {
  if (input ===  '\u0003') {
    process.exit();
  } else if (input === 'W' || input === 'w') {
    connection.write("Move: up");
  } else if (input === 'A' || input === 'a') {
    connection.write("Move: left");
  } else if (input === 'S' || input === 's') {
    connection.write("Move: down");
  } else if (input === 'D' || input === 'd') {
    connection.write("Move: right");
  } else {
    connection.write(`Say: wow this works`);
  }
};

setupInput();

module.exports = setupInput;