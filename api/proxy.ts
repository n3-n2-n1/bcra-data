import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const url = 'https://api.bcra.gob.ar/estadisticas/...'; // URL de la API que quieres acceder
  const apiResponse = await fetch(url);
  const data = await apiResponse.json();

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajusta esto según tus necesidades de seguridad
  res.status(200).json(data);
};
