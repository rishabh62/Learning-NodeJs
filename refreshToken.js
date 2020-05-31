const tokenData = require('./token.json');
const con = require('./const.json');
const fs = require('fs');
const fetch = require("node-fetch");

//if expiry date is less than current date then fetch new token
if (new Date(tokenData.expiry_date) < new Date()) {
    fetchNewToken();
}

function fetchNewToken(){
    var url = new URL(con.accessTokenURI);
    var params = {
        type: 'refresh',
        refresh_token: tokenData.refresh_token,
        client_id: con.clientID,
        redirect_uri: con.redirectURI,
        client_secret: con.clientSecret
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(url, { method: 'POST' })
        .then((response) => response.json())
        .then((json) => {
            var expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + json.expires_in / (60 * 60 * 24));
            json.expiry_date = expiryDate.toString();
            json.refresh_token = tokenData.refresh_token;
            fs.writeFileSync(`${__dirname}/token.json`, JSON.stringify(json), 'utf8');
        });

}