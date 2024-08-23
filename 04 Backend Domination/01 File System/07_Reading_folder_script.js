// fs.readdir(path[, options], callback)

// path <string> | <Buffer> | <URL>
// options <string> | <Object>
// encoding <string> Default: 'utf8'
// withFileTypes <boolean> Default: false
// recursive <boolean> If true, reads the contents of a directory recursively. In recursive mode, it will list all files, sub files and directories. Default: false.
// callback <Function>
// err <Error>
// files <string[]> | <Buffer[]> | <fs.Dirent[]></Error>

const fs = require('fs');

fs.readdir('LOLO_FOLDER', { withFileTypes: true }, function (err, files) {
    if (err) console.log(err);
    else console.log(files);
})










