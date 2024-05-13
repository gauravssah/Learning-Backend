// -----> This is using Promise <-----

const asyncHandler = (reqestHandler_fn) => {
    (req, res, next) => {
        Promise.resolve(reqestHandler_fn(req, res, next)).catch((err) => next(err));
    }
};


export { asyncHandler };


// This is for general understanding.

// #####################################
// -----> This is using Try-catch <-----

// This is something like -->
// const asyncHandler = (fun) => { (fn) => { } }


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// };