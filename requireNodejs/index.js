//https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/
const math = require('./math');

const {add} = require('./math');
const Cat = require('./Cat');

console.log(math.add(2,2));
console.log(math.multiply(9,9));

console.log(add(3,2));

let cat = new Cat();
console.log(cat.makeSound());