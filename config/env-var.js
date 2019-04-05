const HOST = 'localhost';
const UDP_PORT = 8081 ;
const TCP_PORT = 8080 ;

/*
 * 
 * I can put the data in the buffer ( Buffer.from('Hello , i\'m imed jaberi ..'); ) or array of buffer => [buf1, buf2] ..
 *  
*/  
const CLIENT_DATA = 'Hello , i\'m imed jaberi ..' ;

module.exports = { TCP_PORT , UDP_PORT , HOST , CLIENT_DATA } ;

