const DNYCZ = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
const dateFormat = require("dateformat");

exports.apiDayOfWeek = function (req, res) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*"
    });
    let d =new Date();
    let obj = {};
    obj.systDatum = d;
    obj.dayOfWeekNum = d.getDay();
    obj.dayOfWeekCz = DNYCZ[d.getDay()];
    obj.dateCz = d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear();
    obj.timeCz = d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
    obj.dateCzFormat = dateFormat(d, "dd.mm.yyyy");
    obj.dateAndTimeCzFormat = dateFormat(d, "dd.mm.yyyy HH:MM:ss");

    res.end(JSON.stringify(obj));
}