"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Olá mundo");
});
app.listen(8000, function () {
    console.log("Meu servidor está rodando na porta 8000");
});
