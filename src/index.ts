import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Hello World!!!' });
});

app.post('/', (req: Request, res: Response) => {
  const { body } = req;
  res.json({ message: `Hello ${body.name}!` });
});

if (import.meta.env.PROD) {
  app.listen(3000);
}

export const viteNodeApp = app;