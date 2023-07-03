import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../database'; // Importa el cliente de conexión a la base de datos

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Verificar las credenciales en la base de datos
    const result = await client.query('SELECT * FROM usuarios WHERE correo = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada por el usuario con la clave hasheada de la base de datos
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token de autenticación con los datos del usuario
    const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey');

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};