exports.apichat = function (req, res, q, msgs){
    if (q.pathname == "/chat/listmsgs") {
        res.writeHead(200, {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin":"*"});

        let obj = {};
        obj.messages = msgs;
        res.end(JSON.stringify(obj));

    }  else if (q.pathname == "/chat/addmsg") {
        res.writeHead(200, {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin":"*"});

        let obj = {};
        obj.nick = q.query["nick"];
        obj.text = q.query["msg"];
        obj.time = new Date();
        msgs.push(obj);
        res.end(JSON.stringify(obj));
    }
};
