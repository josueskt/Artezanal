
import { Router } from 'express';

import { login } from '../../controllers/logincontroller';

const router:Router = Router();





class loginRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        router.post('/', login);
    }
}
const loginRoute = new loginRoutes();
export default loginRoute.router;
