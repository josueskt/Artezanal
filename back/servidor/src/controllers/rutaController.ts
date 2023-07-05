import { Request, Response } from 'express';
import client from '../database'; // Importa la conexión a la base de datos

export const insertarRuta = async (req: Request, res: Response) => {
  // Obtener los parámetros de la solicitud
  const { longitud, latitud, nombre, informacion, logo } = req.body;

  try {
    // Consulta SQL de inserción
    const query = 'INSERT INTO ruta.sitios (longitud, latitude, nombre, informacion, logo) VALUES ($1, $2, $3, $4, $5)';

    // Ejecutar la consulta con los parámetros proporcionados
    await client.query(query, [longitud, latitud, nombre, informacion, logo]);

    // Datos insertados exitosamente
    res.json({ message: 'Datos insertados exitosamente' });
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};


export const getsites = async (req: Request, res: Response) => {
  try {


    const query = 'SELECT * FROM ruta.sitios'; // Reemplaza 'sitios' con el nombre de tu tabla
    const result = await client.query(query);


    res.json(result.rows);
  } catch (error) {
    console.error('Error al traer datos:', error);
  };

}



export const create_rut = async (req: Request, res: Response) => {
  try {
    const { ruta, ar } = req.body;
    const { nombreRuta, precio, duracion, informacionAdicional } = ruta;
    const rutas: number[] = ar;

    const result = await client.query('INSERT INTO ruta.ruta (fk_lugar_encuentro , precio , nombre , duracion , inf_adi) VALUES ($1, $2, $3 ,$4 ,$5) RETURNING id_ruta;', [ar[0], precio, nombreRuta, duracion, informacionAdicional]);

    const rutaId = result.rows[0].id_ruta;

    for (const i of rutas) {
      console.log(i);
      await client.query('INSERT INTO ruta.detalle_ruta (fk_ruta , fk_sitios) VALUES ($1, $2) ', [rutaId, i]);
    }

    await client.end();
  } catch (error) {
    console.error('Error al traer datos:', error);
  }
};

   




