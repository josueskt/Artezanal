import { Request ,Response } from 'express';
import client from'../database';


class IndexController {
  async index(req: Request, res: Response) {
    try {
      const result = await client.query('SELECT * FROM usuarios.usuarios ');
      
      res.json(result.rows);
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al ejecutar la consulta' });
    } finally {
      client.end();
    }
  }
}



export  const Index = new IndexController()