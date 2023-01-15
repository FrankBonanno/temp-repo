const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data Reveived >> Name: ${name} With ID: ${id}`);
});
customEmitter.on('response', () => {
    console.log(`x2 Data Reveived ...`);
});

customEmitter.emit('response', 'john', 34);
