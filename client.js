const net = require("net");
const { IP, port } = require('./constants');
//establishes connection
const connect = () => {

  const conn = net.createConnection({
    host: IP,
    port: port
  });
  
  //interpret incoming data as text
  conn.setEncoding("utf8");

  //returns server data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: A73");
  });

  return conn;
};

module.exports = connect;