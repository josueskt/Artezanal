"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class game {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('juego'));
    }
}
const Games = new game();
exports.default = Games.router;
