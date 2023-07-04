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
exports.insertarRuta = void 0;
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
