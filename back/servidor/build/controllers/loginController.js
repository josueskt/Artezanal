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
exports.registerUser = void 0;
const database_1 = __importDefault(require("../database")); // Importa el cliente de conexión a la base de datos
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foto, apellido, nombre, correo, password } = req.body;
        const idioma = 1;
        const rol = 1;
        // Verificar si el usuario ya existe en la base de datos
        const existingUser = yield database_1.default.query('SELECT * FROM usuarios.usuarios WHERE correo = $1', [correo]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }
        // Hash de la contraseña
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        //console.log(hashedPassword);
        // Insertar nuevo usuario en la base de datos
        const result = yield database_1.default.query('INSERT INTO usuarios.usuarios (foto, apellido, nombre, correo, fk_idioma, fk_rol) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_user;', [foto, apellido, nombre, correo, idioma, rol]);
        const userId = result.rows[0].id_user;
        console.log(userId);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.registerUser = registerUser;
