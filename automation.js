var puppeteer = require('puppeteer');
var con = require('./const.json');
const tokenData = require('./token.json');
const fetch = require("node-fetch");
var getToken = require('./auth');
var dataToExcel = require('./convertData');

// if (!tokenData.access_token) {
//     const express = require('express');
//     const app = express();
//     const port = 5500;

//     app.get('/webapp', (req, res) => res.send('Thanks! you can close the window now :)'));

//     app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//     getToken();
// }
// else {
fetch(`${con.checkinURI}`, {
    headers: {
        'Authorization': 'Bearer ' + tokenData.access_token
    }
}).then(res => res.json()).then(dataToExcel);
// }
