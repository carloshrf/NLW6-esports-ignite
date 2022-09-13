import express, { Request, Response } from 'express';

const app = express();

app.get('/ads', (request: Request, response: Response) => {
  return response.json([
    { id: 1, name: 'anuncio top 1' },
    { id: 2, name: 'anuncio top 2' },
    { id: 3, name: 'anuncio top 3' },
    { id: 4, name: 'anuncio top 4' }
  ])
})

app.listen(3333, () => console.log('server is running'))