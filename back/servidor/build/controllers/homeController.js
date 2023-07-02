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
class HomeController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('select s.latitude ,s.longitud ,s.nombre from ruta.sitios s  join ruta.detalle_ruta d_r on d_r.fk_ruta = s.id_siitos join ruta.ruta r  on d_r.fk_ruta = r.id_ruta');
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
    rutas_home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('select * from ruta.ruta');
                res.json(result.rows);
            }
            catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }
            finally {
            }
        });
    }
    getRuta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const va = parseInt(id);
            try {
                const ruta = yield database_1.default.query('SELECT * FROM ruta.ruta where id_ruta = $1', [va]);
                const result = yield database_1.default.query('select s.latitude ,s.longitud ,s.logo , s.informacion ,s.nombre from ruta.sitios s  join ruta.detalle_ruta d_r on d_r.fk_sitios = s.id_siitos join ruta.ruta r  on d_r.fk_ruta = $1 ', [va]);
                res.json({ ruta: ruta.rows, result: result.rows });
            }
            catch (err) {
                console.error('Error al ejecutar la consulta:', err);
            }
        });
    }
}
exports.Home = new HomeController();
