import { Router } from 'express';
import { Index } from '../controllers/indexController';
import { Home } from '../controllers/homeController';
class indexRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/', Index.index );
        this.router.get('/home', Home.rutas_home);
        
    }
}
const indexRoute = new indexRoutes();
export default indexRoute.router;