import { Router } from 'express';
import { loginController } from '../../controllers/logincontroller';


class LoginRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.post('/', loginController );
       
    }
}
const logi = new LoginRoutes();
export default logi.router;