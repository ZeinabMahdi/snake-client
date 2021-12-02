// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function(data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: ZZI");
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: up"), 500);
    // setInterval(() => conn.write("Move: left"), 200);
    // setInterval(() => conn.write("Move: down"), 400);
  });

  conn.on('data', (data) => {
    console.log(`message from server: ${data}`);
  });
  return conn;
};



module.exports = connect;