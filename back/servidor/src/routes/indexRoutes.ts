import { Router } from 'express';
import { Index } from '../controllers/indexController';


class indexRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/', Index.index );
        
        
        
    }
}
const indexRoute = new indexRoutes();
export default indexRoute.router;