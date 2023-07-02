import { Request, Response } from 'express';
import qrcode from 'qrcode';

class BoletController {
  async index(req: Request, res: Response) {
    const text = 'http://localhost:3005/boletos'; // Texto para generar el código QR

    // Generar el código QR como una imagen base64
    const qrImage = await qrcode.toDataURL(text);

    // Enviar el código QR como respuesta JSON
    res.json({ qrImage });
  }
}

export const bolet = new BoletController();
