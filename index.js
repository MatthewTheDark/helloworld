const http = require("http");
const dateFormat = require("dateformat");
let citac = 0;
const DNYCZ = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];

http.createServer((req, res) => {
    if (req.url === "/"){ //url - co po nas prohlizec chce
        citac++;
    }
    if (req.url === "/jinastranka"){
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'><title></title></head><body>jina stranka</body></html>");
    } else if (req.url === "/jsondemo"){
        res.writeHead(200, {"Content-type": "application/json"});
        let obj = {};
        obj.jmeno = "Link";
        obj.prijmeni = "Smith";
        obj.rokNarozeni = 1980;
        JSON.stringify(obj);
        res.end(JSON.stringify(obj));
    } else if (req.url == "/jsoncitac") {
        res.writeHead(200, {
            "Content-type": "application/json",
        });
        let obj = {};
        obj.pocetVolani = citac;
        res.end(JSON.stringify(obj));
    } else if (req.url == "/dayofweek") {
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
    } else {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'><title></title></head><body>Počet: " +citac +"</body></html>");
    }

}). listen(8888);
