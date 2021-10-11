const validator = require('validator');

const validateEmail = email => validator.isEmail(email);

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));

console.log('Is mangozegod.com a valid email?: ', validateEmail('mangozegod.com'));

const message = 'NodeJS is amazing!';
console.log(message);

console.log("I'm first");
setTimeout(() => {
  console.log("I'm second");
}, 0);
console.log("I'm third");
