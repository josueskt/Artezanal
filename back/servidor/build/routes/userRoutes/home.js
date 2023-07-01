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
    }
}
const HomeRoute = new HomeRoutes();
exports.default = HomeRoute.router;
