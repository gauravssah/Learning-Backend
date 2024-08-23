// fs.rename(oldPath, newPath, callback)

// oldPath <string> | <Buffer> | <URL>
// newPath <string> | <Buffer> | <URL>
// callback <Function>
// err <Error>


const fs = require('fs');
fs.rename('helloAnother.txt', 'hello2.txt', function (err) {
    if (err) console.log(err);
    else console.log('The file has been renamed!');
})
