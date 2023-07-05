import { Router } from 'express';

import { create_rut, getsites, insertarRuta } from '../../controllers/rutaController';

class crear_rRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.post('/', insertarRuta );

        this.router.get('/sitios', getsites);
        this.router.post('/create_rut', create_rut);

        
    }
}
const crear_ruta = new crear_rRoutes();
export default crear_ruta.router;