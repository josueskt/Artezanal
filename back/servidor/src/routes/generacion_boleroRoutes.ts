import { Router } from 'express';
import { bolet } from '../controllers/generacion_boletoController';

class indexRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/', bolet.index );
        
        
    }
}
const indexRoute = new indexRoutes();
export default indexRoute.router;