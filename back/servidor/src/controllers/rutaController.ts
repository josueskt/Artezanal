import { Request, Response } from 'express';
import client from '../database'; // Importa la conexión a la base de datos

export const insertarRuta = async (req: Request, res: Response) => {
  // Obtener los parámetros de la solicitud
  const { longitud, latitud, nombre, informacion, logo } = req.body;

  try {
    // Consulta SQL de inserción
    const query = 'INSERT INTO rutas (longitud, latitud, nombre, informacion, logo) VALUES ($1, $2, $3, $4, $5)';
    
    // Ejecutar la consulta con los parámetros proporcionados
    await client.query(query, [longitud, latitud, nombre, informacion, logo]);
    
    // Datos insertados exitosamente
    res.json({ message: 'Datos insertados exitosamente' });
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
