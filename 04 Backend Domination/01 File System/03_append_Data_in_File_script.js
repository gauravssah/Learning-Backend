// fs.appendFile(path, data[, options], callback)

// path <string> | <Buffer> | <URL> | <number> filename or file descriptor
// data <string> | <Buffer>
// options <Object> | <string>
// encoding <string> | <null> Default: 'utf8'
// mode <integer> Default: 0o666
// flag <string> See support of file system flags. Default: 'a'.
// flush <boolean> If true, the underlying file descriptor is flushed prior to closing it. Default: false.
// callback <Function>
// err <Error></Error>

// appending data to an existing file

const fs = require('fs');
fs.appendFile('hello.txt', ' How are you?', function (err) {
    if (err) console.log(err);
    else console.log('The file has been updated!');
})





