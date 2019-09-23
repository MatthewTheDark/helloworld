const http = require("http");

let citac = 0;

http.createServer((req, res) => {
    if (req.url == "/"){ //url - co po nas prohlizec chce
        citac++;
    }
    if (req.url == "/jinastranka"){
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'></head><body>jina stranka</body></html>");
    } else if (req.url == "/jsondemo"){
        res.writeHead(200, {"Content-type": "application/json"});
        let obj = {};
        obj.jmeno = "Link";
        obj.prijmeni = "Smith";
        obj.rokNarozeni = 1980;
        JSON.stringify(obj);
        res.end(JSON.stringify(obj));

    } else {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'></head><body>Počet: " +citac +"</body></html>");
    }

}). listen(8888);
