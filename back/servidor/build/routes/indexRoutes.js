"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const homeController_1 = require("../controllers/homeController");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.Index.index);
        this.router.get('/home', homeController_1.Home.rutas_home);
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
