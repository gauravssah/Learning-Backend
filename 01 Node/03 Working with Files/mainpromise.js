import fs from "fs/promises";

let a = await fs.readFile("gaurav.txt");

// let b = await fs.writeFile("gaurav.txt", "\n\n\n\n\n\n\n\n\n this is amazing promise.");
let b = await fs.appendFile("gaurav.txt", "\n\n\n\n\n\n\n\n\n this is amazing promise.");

console.log(a.toString(), b);