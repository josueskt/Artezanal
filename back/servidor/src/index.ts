import express , {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import  HomeRoute from './routes/userRoutes/home';
import g_bolet from './routes/generacion_boleroRoutes'; 
import logi from './routes/userRoutes/RegisterRoutes';
import loge from './routes/userRoutes/loginRoutes'; 
import morgan from 'morgan';
import cors from 'cors';





class  Server { 
 public app: Application;
 constructor(){
   this.app = express();
   this.config();
   this.routes();
 }


 
 config():void {

this.app.set('port',process.env.PORT||3005 );
this.app.use(morgan('dev')); 
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({ extended:false }));

 }
 routes():void {
this.app.use('/',indexRoutes); 
this.app.use('/home',HomeRoute); 
this.app.use('/boletos',g_bolet);
this.app.use('/register' , logi);
this.app.use('/login',loge);



 }
 start():void {
    this.app.listen(this.app.get('port'),()=>{
        console.log('server started',this.app.get('port'));
    });
 }
}
const serve = new Server();
serve.start()