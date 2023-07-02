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
exports.bolet = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
class BoletController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = 'http://localhost:3005/boletos'; // Texto para generar el código QR
            // Generar el código QR como una imagen base64
            const qrImage = yield qrcode_1.default.toDataURL(text);
            // Enviar el código QR como respuesta JSON
            res.json({ qrImage });
        });
    }
}
exports.bolet = new BoletController();
