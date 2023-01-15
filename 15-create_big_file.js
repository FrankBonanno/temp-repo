const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `My Peepee is now ${i} inch(es) long!\n`, { flag: 'a' });
}
