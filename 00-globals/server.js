// TODO: make sure ur active directory is 00-globals

// console.log(global);

// require('./lib')
console.log(process.cwd()) //=> /00-globals
console.log(__dirname)  //=> /00-globals
console.log(__dirname === process.cwd()) //=> true

console.log(__filename); //=> /00-globals/server.js

// console.log(process);