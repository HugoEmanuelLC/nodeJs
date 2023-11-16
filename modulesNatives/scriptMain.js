const os = require('node:os')
const fs = require('node:fs')

console.log(os.uptime()/60/60/24);

console.log("/////////////////////////////");

const stats = fs.statSync('./modulesNatives/testFS.txt')
const text = fs.readFileSync('./modulesNatives/testFS.txt', 'utf-8')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
);

console.log("/////////////////////////////");

console.log(text);

console.log("/////////////////////////////");

setTimeout(() => {
    console.log(__filename);
},3000)