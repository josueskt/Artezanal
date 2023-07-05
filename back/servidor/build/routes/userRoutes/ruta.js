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
        this.router.get('/sitios', rutaController_1.getsites);
        this.router.post('/create_rut', rutaController_1.create_rut);
    }
}
const crear_ruta = new crear_rRoutes();
exports.default = crear_ruta.router;
