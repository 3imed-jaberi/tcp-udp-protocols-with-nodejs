/*
 **********************************
 *      CLIENT UDP PROTOCOLE      *
 **********************************
*/


const dgram = require('dgram');
const udpClient = dgram.createSocket('udp4');
const { CLIENT_DATA , UDP_PORT , HOST } = require('../config/env-var');

udpClient.send(CLIENT_DATA , UDP_PORT , HOST , (err , result) => {
  if (err) {
    console.error("Some error in the udp client ... \n "+err);
  }else{
    if (result) {
      console.info("success send .. ");
    }else{
      console.info("failed send .. ");
    }
  }
  udpClient.close();
});