// fs.unlink(path, callback)

// path <string> | <Buffer> | <URL>
// callback <Function>
// err <Error>

const fs = require('fs');

fs.unlink('maidelete.txt', function (err) {
    if (err) console.log(err);
    else console.log('The file has been deleted!');
})



