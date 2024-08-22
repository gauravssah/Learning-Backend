// fs.readFile(path[, options], callback)

// path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
// options <Object> | <string>
// encoding <string> | <null> Default: null
// flag <string> See support of file system flags. Default: 'r'.
// signal <AbortSignal> allows aborting an in-progress readFile
// callback <Function>
// err <Error> | <AggregateError>
// data <string> | <Buffer></Buffer>

// The callback is passed two arguments (err, data), where data is the contents of the file.
// If no encoding is specified, then the raw buffer is returned.
// If options is a string, then it specifies the encoding:

// readFile('/etc/passwd', 'utf8', callback); 

// Read data from a file

const fs = require('fs');

fs.readFile('hello.txt', 'utf8', function (err, data) {
    if (err) console.log(err);
    else console.log(data);
})



