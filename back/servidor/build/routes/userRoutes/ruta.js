"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaController_1 = require("../../controllers/rutaController");
class crear_rRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', rutaController_1.insertarRuta);
    }
}
const crear_ruta = new crear_rRoutes();
exports.default = crear_ruta.router;
