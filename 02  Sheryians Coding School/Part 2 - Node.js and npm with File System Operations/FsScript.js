const fs = require('fs');

fs.writeFile("hey.txt", "Hello How Are You?", function (err) {
    if (err) console.log(err);
    else console.log("writeFile done");
});



// <---------------------------------------->

fs.appendFile("hey.txt", " I am good, Whats about You.", (err) => {
    if (err) console.log(err);
    else console.log("appendFile done");
});



// <---------------------------------------->

fs.rename("hey.txt", "gaurav.txt", (err) => {
    if (err) console.log(err);
    else console.log("rename Done");
});



// <---------------------------------------->

fs.copyFile("gaurav.txt", "./copy/gauravcopy.txt", (err) => {
    if (err) console.log(err.message);
    else console.log("Copy Done!");
});



// <---------------------------------------->

fs.unlink("gaurav.txt", (err) => {
    if (err) console.log(err);
    else console.log("removed!");
});



// <---------------------------------------->

fs.rmdir("./copy", (err) => {
    if (err) console.error(err);
    else console.log("removed!");
});  // Error: ENOTEMPTY: directory not empty.

fs.rmdir("./copy", { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log("removed!");
}); // DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead

fs.rm("./copy", { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log("removed!");
}); // removed! , with no any error. || This is remove also that folder that have any file.



// <---------------------------------------->

fs.readFile("hey.txt", (err, data) => {
    if (err) console.error(err);
    // else console.log(data);  // <Buffer 48 65 6c 6c 6f 20 48 6f 77 20 41 72 65 20 59 6f 75 3f>
    else console.log(data.toString());  // Hello How Are You?
});