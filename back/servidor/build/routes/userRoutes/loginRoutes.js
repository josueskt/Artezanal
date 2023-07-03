"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logincontroller_1 = require("../../controllers/logincontroller");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', logincontroller_1.loginController);
    }
}
const logi = new LoginRoutes();
exports.default = logi.router;
