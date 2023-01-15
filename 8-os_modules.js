const os = require('os');

// Info About Current User
const user = os.userInfo();
console.log('User:', user);

// Method returns the system uptime in seconds
console.log(`The System Uptime Is: ${os.uptime()} seconds!`);

const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    usedMem: `${((os.totalmem() - os.freemem()) / os.totalmem()) * 100} %`,
};
console.log(currOS);
