var con = require('./const.json');
module.exports = async function getToken() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`${con.authorizationURI}?type=web_server&client_id=${con.clientID}&redirect_uri=${con.redirectURI}`);
    await page.$eval('#username', el => el.value = 'abc@xyz.com');
    await page.keyboard.press("Enter");
    await page.$eval('#password', el => { el.value = 'password'; el.focus() });
    // await page.$eval('.form[action="/session"]', form => form.submit()); 
    // await page.screenshot({path: 'example.png'});


    await page.waitForNavigation();

    console.log('New Page URL:', page.url());
    await page.waitForNavigation();

    console.log('New Page URL:', page.url());
    await page.waitForNavigation();

    console.log('New Page URL:', page.url());
    var tempCode = page.url().split('?')[1].split('=')[1];
    console.log(tempCode);
    var tokenURI = `${con.accessTokenURI}?type=web_server&client_id=${con.clientID}&client_secret=${con.clientSecret}&redirect_uri=${con.redirectURI}&code=${tempCode}`
    fetch(tokenURI, {
        method: 'POST'
    }).then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log(json);
    });

};