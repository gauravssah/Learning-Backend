// These are morden codebase prectics.

import { a, b, c, d } from './exportModule.js';
console.log(a, b, c, d);  // 1 2 3 4

// ---------------------------------------
import obj from './exportModule.js';
console.log(obj.x);          // 88

// ---------------------------------------
import objhihaiye from './exportModule.js';
console.log(objhihaiye);     // { x: 88, y: '10' }
console.log(objhihaiye.y);   // 10

// ---------------------------------------
// These are old codebase prectics.
/* <---- from package.json ---->

    "name": "02-intro-to",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",

  <------after removing ("type": "module",) ------->
    "name": "02-intro-to",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",

    <----we need to import using {require("./moduleExport.js")} ---->
*/

// const exp = require("./moduleExport.js");
// console.log(exp);  // 56

