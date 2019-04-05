/*
 **********************************
 *      SERVER TCP PROTOCOLE      *
 **********************************
*/


const net = require('net');
const uuid = require('uuid');
const { TCP_PORT , HOST } = require('../config/env-var');



// Create the server .. 
const tcpServer = net.createServer(socket => {
  socket.uuid = uuid.v1() ;

  socket.on('data', data =>{
      /**
        * display the Universally Unique IDentifier 
        * for more details go to the docs folder in this 
        *project or : https://www.ietf.org/rfc/rfc4122.txt 
      */ 
      console.log(socket.uuid);
      // the data is in buffer type  so i cast to sting .. 
      console.log(data.toString());

  });
}).on('error', (err) => {
  // * When received some error .. 
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      tcpServer.close();
      tcpServer.listen(TCP_PORT, HOST);
    }, 1500);
  }else{
          throw err;
  }
});


// Run the server .. 
tcpServer.listen(TCP_PORT , HOST , ( ) => {
  console.log(`tcp server listening :   ${address.address}:${address.port}`);
});

