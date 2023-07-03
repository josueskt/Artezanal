import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import client from '../database'; // Importa el cliente de conexión a la base de datos

export const registerUser = async  (req: Request, res: Response) => {
  try {
    const {foto,apellido ,nombre,correo, password } = req.body;

    const idioma = 1; 
    const rol = 1;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await client.query('SELECT * FROM usuarios.usuarios WHERE correo = $1', [correo]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'El usuario ya está registrado' });
    }

    // Hash de la contraseña
   // const salt = await bcrypt.genSalt(10);
   // const hashedPassword = await bcrypt.hash(password, salt);
//console.log(hashedPassword);

    // Insertar nuevo usuario en la base de datos

    const result =   await client.query('INSERT INTO usuarios.usuarios (foto, apellido, nombre, correo, fk_idioma, fk_rol) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_user;', [foto, apellido, nombre, correo, idioma, rol]);

    const userId = result.rows[0].id_user;
    console.log(userId);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
