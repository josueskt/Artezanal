"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = require("../../controllers/homeController");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', homeController_1.Home.rutas_home);
        this.router.get('/rutas', homeController_1.Home.rutas_home);
        this.router.get('/rutas/:id', homeController_1.Home.getRuta);
    }
}
const HomeRoute = new HomeRoutes();
exports.default = HomeRoute.router;
