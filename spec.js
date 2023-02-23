const os = require('os');

// console.log("Free Memory : ", (os.freemem()/1024/1024/1024).toFixed(2));
// console.log("Free Memory : ", os.totalmem()/1024/1024/1024);
console.log(os.version());
console.log(os.cpus());