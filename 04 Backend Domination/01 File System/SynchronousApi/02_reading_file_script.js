const fs = require('fs');

let data = fs.readFileSync('hello.txt', "utf8");
// console.log(data.toString());
console.log(data);
console.log('File read successfully!');



