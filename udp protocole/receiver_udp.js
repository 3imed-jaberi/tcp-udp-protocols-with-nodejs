/*
 **********************************
 *      SERVER UDP PROTOCOLE      *
 **********************************
*/


const dgram = require('dgram');
const udpServer = dgram.createSocket('udp4'); 
const { UDP_PORT } = require('../config/env-var');



// * When received some error .. 
udpServer.on('error', (err) => {
  console.log(`udp server error: \n ${err.stack}`);
  udpServer.close();
});


// * When received a message .. 
udpServer.on('message', (msg , rinfo) => {
   console.log(`udp server recived from ${rinfo.address}:${rinfo.port} : \n${msg}`);
});

// * When run the server .. 
udpServer.on('listening', () => {
   const address = udpServer.address();
   console.log(`udp server listening :   ${address.address}:${address.port}`);
});

// Run the server .. 
udpServer.bind(UDP_PORT);
