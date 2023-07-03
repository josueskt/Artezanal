import { Router } from 'express';
import { login } from '../../controllers/loginController';


class LoginRoutes {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/',  login.index );
        this.router.post('/', login.register)
       
    }
}
const logi = new LoginRoutes();
export default logi.router;