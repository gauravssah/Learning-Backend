// fs.rmdir(path[, options], callback)

// path <string> | <Buffer> | <URL>
// options <Object>
// maxRetries <integer> If an EBUSY, EMFILE, ENFILE, ENOTEMPTY, or EPERM error is encountered, Node.js retries the operation with a linear backoff wait of retryDelay milliseconds longer on each try. This option represents the number of retries. This option is ignored if the recursive option is not true. Default: 0.
// recursive <boolean> If true, perform a recursive directory removal. In recursive mode, operations are retried on failure. Default: false. Deprecated.
// retryDelay <integer> The amount of time in milliseconds to wait between retries. This option is ignored if the recursive option is not true. Default: 100.
// callback <Function>
// err <Error></Error>

// Delete a folder recursively
// ----------------------------------
const fs = require('fs');
fs.rmdir('LOLO_FOLDER', { recursive: true }, function (err) {
    if (err) console.log(err);
    else console.log('The folder has been deleted!');
})

// DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true })


// ----------------------------------

//  New in Node.js v18.0.0: To delete a folder recursively, use fs.rm(path, { recursive: true }, callback).

const fs = require('fs');

fs.rm('LOLO_FOLDER', { recursive: true }, function (err) {
    if (err) console.log(err);
    else console.log('The folder has been deleted!');
})


//  The folder has been deleted!





