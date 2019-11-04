const http = require("http");
const dateFormat = require("dateformat");
const fs = require("fs");
const  url = require('url');
const  apiDayOfWeek = require('./api-dayofweek').apiDayOfWeek; //import fce .=tato slozka
const  apiSvatky = require('./api-svatky').apiSvatky;
const  apijsonCitac = require('./api-jsoncitac').apijsonCitac;
const  apichat = require('./api-chat').apichat;

let citac = 0;
let msgs = [];


function processStaticFiles(res, fileName) {
    fileName = fileName.substr(1); //zkopir. od 2. znaku
    console.log(fileName);
    let contentType = "text/html";
    if (fileName.endsWith(".png")){
        contentType = "image/png";
    } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")){
        contentType = "image/jpeg";
    }

    if (fs.existsSync(fileName)){
        fs.readFile(fileName, function(err, data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        });

    } else {
        res.writeHead(404);
        res.end();

    }
}


http.createServer((req, res) => {

    let q = url.parse(req.url, true);

    if (q.pathname === "/") { //url - co po nas prohlizec chce
        citac++;
        processStaticFiles(res, "/index.html");
        return;
    }
    if (q.pathname.length - q.pathname.lastIndexOf(".") < 6) {
        processStaticFiles(res, q.pathname);
        return;
    }
    if (q.pathname === "/jinastranka") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'><title></title></head><body>jina stranka</body></html>");
    } else if (q.pathname === "/jsondemo") {
        res.writeHead(200, {"Content-type": "application/json"});
        let obj = {};
        obj.jmeno = "Link";
        obj.prijmeni = "Smith";
        obj.rokNarozeni = 1980;
        JSON.stringify(obj);
        res.end(JSON.stringify(obj));
    } else if (q.pathname === "/jsoncitac") {
        apijsonCitac(req, res);
    } else if (q.pathname === "/dayofweek") {
        apiDayOfWeek(req, res);
    } else if (q.pathname === "/svatky") {
        apiSvatky(req, res, q);
    } else if (q.pathname.startsWith(("/chat"))) {
        apichat(req, res, q, msgs);
    } else if (q.pathname === "/epic") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='de'><head><meta charset='UTF-8'><title></title></head><body style='font-family: '>OwO</body></html>");
    } else {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'><title></title></head><body>Počet: " + citac + "</body></html>");
    }

}).listen(8888);
 //terminal
//C:\Users\moravecmatous\WebstormProjects\untitled>lt --port 8888 --subdomain libor
//your url is: https://big-bear-21.localtunnel.me


