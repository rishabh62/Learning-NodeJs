const j2x = require('json2xls');
const fs = require('fs');
const htmlToText = require('html-to-text');
const htmlToFormattedText = require("html-to-formatted-text");

function simplify(json) {
    var json = json.map(function (item) {
        var obj = {};
        obj.content = htmlToFormattedText(item.content);
        obj.created_at = item.created_at;
        obj.created_by = item.creator.name;
        return obj;
    });
    return json;
};

module.exports = function dataToExcel(json) {
    json = simplify(json);
    console.log(json);
    var xls = j2x(json);
    fs.writeFileSync('data.xls', xls, 'binary');
};