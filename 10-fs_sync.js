/* Module 10 - FS (Sync) */
const { readFileSync, writeFileSync } = require('fs');

console.log('FS_SYNC >>> STARTING');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./content/result_sync.txt', `Here is the second result: ${first}, ${second}\n`, { flag: 'a' });

console.log('FS_SYNC >>> FINISHED WRITING');
console.log('STARTING NEXT TASK ...');
