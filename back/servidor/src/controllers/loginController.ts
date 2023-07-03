import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../database'; // Importa el cliente de conexión a la base de datos

export const loginController = async (req: Request, res: Response) => {
    try {
      const { correo, password } = req.body;
  
      // Verificar si el usuario existe en la base de datos
      const result = await client.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
      const user = result.rows[0];
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Verificar la contraseña
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
  
      // Generar el token de autenticación
      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
 
  
