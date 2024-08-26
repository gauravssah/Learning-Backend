const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // This is response comming from server.
    res.send('Understanding Request and Response');

    // This is request comming from client, or browser.
    console.log(req);

    // console.log(req.body);
    // console.log(req.cookies);
    // console.log(req.query);
    // console.log(req.ip);
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(req.method);

});

app.listen(3000, () => {
    console.log('Example app listening on port 3000! http://localhost:3000');
});



