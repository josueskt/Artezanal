"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generacion_boletoController_1 = require("../controllers/generacion_boletoController");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', generacion_boletoController_1.bolet.index);
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
