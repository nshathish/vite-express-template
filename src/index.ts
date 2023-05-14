import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

if (import.meta.env.PROD) {
  app.listen(3000);
}

export const viteNodeApp = app;