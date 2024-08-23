// fs.mkdir(path[, options], callback)

// path <string> | <Buffer> | <URL>
// options <Object> | <integer>
// recursive <boolean> Default: false
// mode <string> | <integer> Not supported on Windows. Default: 0o777.
// callback <Function>
// err <Error>
// path <string> | <undefined> Present only if a directory is created with recursive set to true.


const fs = require('fs');

fs.mkdir('LOLO_FOLDER', function (err) {
    if (err) console.log(err);
    else console.log('The folder has been created!');
})









