// To use the callback and sync APIs:
// Create a file
// Write data to the file

// fs.writeFile(file, data[, options], callback)

// file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
// data <string> | <Buffer> | <TypedArray> | <DataView>
// options <Object> | <string>
// encoding <string> | <null> Default: 'utf8'
// mode <integer> Default: 0o666
// flag <string> See support of file system flags. Default: 'w'.
// flush <boolean> If all data is successfully written to the file, and flush is true, fs.fsync() is used to flush the data. Default: false.
// signal <AbortSignal> allows aborting an in-progress writeFile
// callback <Function>
// err <Error> | <AggregateError></AggregateError>


const fs = require('fs');
fs.writeFile('helloAnother.txt', 'Hii, Gaurav Sah!', function (err) {
    if (err) console.log(err);
    else console.log('The file has been created!');
})










