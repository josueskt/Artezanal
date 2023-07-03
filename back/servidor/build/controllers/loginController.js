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
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const users = [];
class loginController {
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
            }
        });
    }
    ;
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                // Verificar si el usuario ya existe
                const existingUser = users.find((user) => user.username === username);
                if (existingUser) {
                    return res.status(400).json({ message: 'El usuario ya está registrado' });
                }
                // Hash de la contraseña
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashedPassword = yield bcrypt_1.default.hash(password, salt);
                // Crear nuevo usuario
                const newUser = {
                    username,
                    password: hashedPassword,
                };
                users.push(newUser);
                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error en el servidor' });
            }
        });
    }
    ;
}
exports.login = new loginController();
