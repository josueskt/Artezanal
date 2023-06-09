"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const home_1 = __importDefault(require("./routes/userRoutes/home"));
const generacion_boleroRoutes_1 = __importDefault(require("./routes/generacion_boleroRoutes"));
const RegisterRoutes_1 = __importDefault(require("./routes/userRoutes/RegisterRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/userRoutes/loginRoutes"));
const ruta_1 = __importDefault(require("./routes/userRoutes/ruta"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3005);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/home', home_1.default);
        this.app.use('/boletos', generacion_boleroRoutes_1.default);
        this.app.use('/register', RegisterRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/crear_sitio', ruta_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server started', this.app.get('port'));
        });
    }
}
const serve = new Server();
serve.start();
