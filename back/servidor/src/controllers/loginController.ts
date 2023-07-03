import { Request, Response } from 'express';
import client from '../database';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const users: any[] = [];

class loginController {
    async index(req: Request, res: Response) {



        try {
            const result = await client.query('SELECT * FROM usuarios.usuarios ');

            res.json(result.rows);
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {

        }
    };

  
    async register(req: Request, res: Response){
    try {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = users.find((user) => user.username === username);
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        // Hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear nuevo usuario
        const newUser = {
            username,
            password: hashedPassword,
        };

        users.push(newUser);

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};




    }



export const login = new loginController()