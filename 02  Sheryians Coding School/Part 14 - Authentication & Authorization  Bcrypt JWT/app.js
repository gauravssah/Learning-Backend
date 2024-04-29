const cookieParser = require('cookie-parser');
const express = require('express');
// const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const app = express();

// cookie ---->
app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "gauravsah");
    res.send("done");
});

app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("Read Page");
});

// bcrypt ---> encrytption  and decryption of password. 

// app.get("/password", (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("myPlaintextPassword", salt, function (err, hash) {
//             console.log(hash);
//         });
//     });
// });


// app.get("/password", (req, res) => {
//     bcrypt.compare("myPlaintextPassword", hash, function (err, result) {
//         console.log(result);
//     });
// });


// jwt ---->

app.get("/jwt", (req, res) => {
    let token = jwt.sign({ email: "gaurav@example.com" }, "secretHaiYe");
    // console.log(token);
    res.cookie("token", token);
    res.send("Done");
});

app.get("/readcookies", (req, res) => {
    res.send("Done");
    console.log(req.cookies.token);

    // Getting the data..

    let data = jwt.verify(req.cookies.token, "secretHaiYe");
    console.log("Data :", data);  // Data : { email: 'gaurav@example.com', iat: 1714371178 }

});


app.listen(3000);