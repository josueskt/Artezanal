import { Router } from 'express';
import { Home } from '../../controllers/homeController';
import { insertarRuta } from '../../controllers/rutaController';

class crear_rRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.post('/', insertarRuta );
        
    }
}
const crear_ruta = new crear_rRoutes();
export default crear_ruta.router;