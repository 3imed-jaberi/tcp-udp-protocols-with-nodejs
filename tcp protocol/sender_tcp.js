/*
 **********************************
 *      CLIENT TCP PROTOCOLE      *
 **********************************
*/


const net = require('net');
const { CLIENT_DATA , TCP_PORT } = require('../config/env-var');


const tcpClient = net.createConnection({ port: TCP_PORT }, () => {
  // 'connect' listener
  console.log('connected to server!');
  // send client_data global varibale .. 
  tcpClient.write(CLIENT_DATA);
});

// * When received some data .. 
tcpClient.on('data', (data) => {
  console.log(data.toString());
  tcpClient.end();
});

// * When disconnect from the server ..
tcpClient.on('end', () => {
  console.log('disconnected from tcp server');
});