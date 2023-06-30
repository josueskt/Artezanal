"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.Index.index);
        this.router.post('/', indexController_1.Index.index);
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
