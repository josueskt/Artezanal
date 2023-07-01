"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const database_1 = __importDefault(require("../database"));
const home_component_1 = require("./../../../../artezanal_api/src/app/home/home.component");
class HomerController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('SELECT * FROM usuarios.usuarios ');
                res.json(result.rows);
            }
            catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }
            finally {
                database_1.default.end();
            }
        });
    }
}
exports.Home = new home_component_1.HomeComponent();
