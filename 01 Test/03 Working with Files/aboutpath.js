import path from "path";
console.log(path);

let mypath = "///h://28%20BACKEND%20DEVELOPEMENT//01%20Test//03%20Working%20with%20Files//main.js"
console.log(path.extname(mypath));  // .js
console.log(path.dirname(mypath));  ///h://28%20BACKEND%20DEVELOPEMENT//01%20Test//03%20Working%20with%20Files/

console.log(path.basename(mypath)); // main.js

console.log(path.join("c:/", "program\\gaurav.txt")); // c:\program\gaurav.txt

