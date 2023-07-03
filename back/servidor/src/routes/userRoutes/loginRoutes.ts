import { Router } from 'express';
import { registerUser } from '../../controllers/loginController';


class LoginRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.post('/', registerUser);
       
    }
}
const logi = new LoginRoutes();
export default logi.router;