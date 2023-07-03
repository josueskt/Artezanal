"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = require("../../controllers/RegisterController");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', RegisterController_1.registerUser);
    }
}
const logi = new LoginRoutes();
exports.default = logi.router;
