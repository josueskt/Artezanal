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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database")); // Importa el cliente de conexión a la base de datos
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Verificar las credenciales en la base de datos
        const result = yield database_1.default.query('SELECT u.nombre, u.apellido, u.foto, u.correo, p.password FROM usuarios.usuarios AS u JOIN usuarios.historial_contraseñas AS h ON h.fk_user = u.id_user JOIN usuarios.pasword_user AS p ON h.fk_password = p.id_password AND u.correo = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        // Comparar la contraseña proporcionada por el usuario con la clave hasheada de la base de datos
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        // Generar un token de autenticación con los datos del usuario
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, 'secretKey');
        // Enviar el token como parte de la respuesta
        res.json({ token, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.login = login;
