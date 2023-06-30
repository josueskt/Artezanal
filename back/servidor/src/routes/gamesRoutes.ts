import { Router } from 'express';
class game {
    router: Router = Router();
    constructor() {
 this.config()
    }
    config(): void {
        this.router.get('/', (req, res) => res.send('juego'));
    }
}
const Games = new game();
export default Games.router;