const net = require("net");

//establishes connection
const connect = () => {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  
  //interpret incoming data as text
  conn.setEncoding("utf8");

  //returns server data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;