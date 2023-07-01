import { Router } from 'express';
import { Home } from '../../controllers/homeController';

class HomeRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/', Home.rutas_home );
        
    }
}
const HomeRoute = new HomeRoutes();
export default HomeRoute.router;