/* 3 - Modules */
// module.exports is global (share the minimum)
const names = require('./4-names.js');
const sayHello = require('./5-utils.js');
const data = require('./6-alt_flavor.js');
require('./7-mind_grenade');

sayHello('Frankie');
sayHello(names.john);
sayHello(names.peter);
