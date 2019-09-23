const http = require("http");

let citac = 0;

http.createServer((req, res) => {
    if (req.url == "/"){ //url - co po nas prohlizec chce
        citac++;
    }
    if (req.url == "/jinastranka"){
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'></head><body>jina stranka</body></html>");
    } else {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html lang='cs'><head><meta charset='UTF-8'></head><body>Počet: " +citac +"</body></html>");
    }

}). listen(8888);
