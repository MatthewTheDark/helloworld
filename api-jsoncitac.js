




exports.apijsonCitac = function (req, res, citac) {
    res.writeHead(200, {
        "Content-type": "application/json",
    });
    let obj = {};
    obj.pocetVolani = citac;
    res.end(JSON.stringify(obj));
}