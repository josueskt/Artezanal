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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_rut = exports.getsites = exports.insertarRuta = void 0;
const database_1 = __importDefault(require("../database")); // Importa la conexión a la base de datos
const insertarRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener los parámetros de la solicitud
    const { longitud, latitud, nombre, informacion, logo } = req.body;
    try {
        // Consulta SQL de inserción
        const query = 'INSERT INTO ruta.sitios (longitud, latitude, nombre, informacion, logo) VALUES ($1, $2, $3, $4, $5)';
        // Ejecutar la consulta con los parámetros proporcionados
        yield database_1.default.query(query, [longitud, latitud, nombre, informacion, logo]);
        // Datos insertados exitosamente
        res.json({ message: 'Datos insertados exitosamente' });
    }
    catch (error) {
        console.error('Error al insertar datos:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.insertarRuta = insertarRuta;
const getsites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'SELECT * FROM ruta.sitios'; // Reemplaza 'sitios' con el nombre de tu tabla
        const result = yield database_1.default.query(query);
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
    }
    ;
});
exports.getsites = getsites;
const create_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    try {
        const { ruta, ar } = req.body;
        const { nombreRuta, precio, duracion, informacionAdicional } = ruta;
        const resu = yield database_1.default.query('INSERT INTO ruta.ruta (fk_lugar_encuentro , precio , nombre , duracion , inf_adi) VALUES ($1, $2, $3 ,$4 ,$5) RETURNING id_ruta;', [ar[0], precio, nombreRuta, duracion, informacionAdicional]);
        const rutaId = resu.rows[0].id_ruta;
        try {
            for (var _d = true, ar_1 = __asyncValues(ar), ar_1_1; ar_1_1 = yield ar_1.next(), _a = ar_1_1.done, !_a; _d = true) {
                _c = ar_1_1.value;
                _d = false;
                let i = _c;
                const res = yield database_1.default.query('select * from ruta.detalle_ruta where fk_ruta = $1 and fk_sitios = $2  ', [rutaId, i]);
                console.log(res.rows);
                if (res.rows.length == 0) {
                    yield database_1.default.query('INSERT INTO ruta.detalle_ruta (fk_ruta, fk_sitios)  VALUES ($1, $2)  ', [rutaId, i]);
                    console.log(i);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = ar_1.return)) yield _b.call(ar_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    catch (error) {
        console.error('Error al traer datos:', error);
    }
});
exports.create_rut = create_rut;
