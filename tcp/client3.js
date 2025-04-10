// A client for the date server.
//
// Example usage:
//   default 127.0.0.1    (find by ipconfig)
//   node dateclient.js 10.0.1.40
const net = require('net');
const client = new net.Socket();
client.connect({
    port: 59090,
    host: process.argv[2]
});
client.on('data', (data) => {
    console.log(data.toString('utf-8'));
});

//console.log(process.argv)