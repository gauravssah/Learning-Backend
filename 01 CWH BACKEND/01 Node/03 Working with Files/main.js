const fs = require("fs");
// const fs = require("fs/promises");   // we can also use like this.

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("gaurav.txt", "Gaurav is Legend");

fs.writeFile("gaurav2.txt", "Gaurav is good.", () => {
    console.log("done");
    fs.readFile("gaurav2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})

fs.appendFile("gaurav.txt", " gauravsah", (e, d) => {
    console.log(d);
})

console.log("Ending");