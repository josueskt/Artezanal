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
    try {
        const { ruta, ar } = req.body;
        const { nombreRuta, precio, duracion, informacionAdicional } = ruta;
        const rutas = ar;
        const result = yield database_1.default.query('INSERT INTO ruta.ruta (fk_lugar_encuentro , precio , nombre , duracion , inf_adi) VALUES ($1, $2, $3 ,$4 ,$5) RETURNING id_ruta;', [ar[0], precio, nombreRuta, duracion, informacionAdicional]);
        const rutaId = result.rows[0].id_ruta;
        for (const i of rutas) {
            console.log(i);
            yield database_1.default.query('INSERT INTO ruta.detalle_ruta (fk_ruta , fk_sitios) VALUES ($1, $2) ', [rutaId, i]);
        }
        yield database_1.default.end();
    }
    catch (error) {
        console.error('Error al traer datos:', error);
    }
});
exports.create_rut = create_rut;
