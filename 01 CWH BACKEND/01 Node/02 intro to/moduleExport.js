module.exports = {
    g: "Gaurav",
    m: 62,
}

let c = 56;
module.exports = c;

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

    <----we need to exports using (module.exports =) ---->
*/