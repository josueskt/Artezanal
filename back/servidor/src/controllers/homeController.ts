import { Request ,Response } from 'express';
import client from'../database';


class HomeController {
  async index(req: Request, res: Response) {
    try {
      const result = await client.query('select s.latitude ,s.longitud ,s.nombre from ruta.sitios s  join ruta.detalle_ruta d_r on d_r.fk_ruta = s.id_siitos join ruta.ruta r  on d_r.fk_ruta = r.id_ruta' );
      
      res.json(result.rows);
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al ejecutar la consulta' });
    } finally {
      client.end();
    }
  }

  async rutas_home(req: Request, res: Response) {
    try {
      const result = await client.query('select * from ruta.ruta' );
      
      res.json(result.rows);
      
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al ejecutar la consulta' });
    } finally {
      
    }
  }



}



export  const Home = new HomeController()