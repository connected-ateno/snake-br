"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http_1 = require("http");
var app = express_1["default"]();
var server = http_1["default"].createServer(app);
app.get("/", function (_, res) {
    console.log(__dirname + 'index.html');
    res.sendFile(__dirname + "/index.html");
});
server.listen(3000, function () {
    console.log("listening on *:3000");
});
