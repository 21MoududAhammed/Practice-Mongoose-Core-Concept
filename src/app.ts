import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/user/user.route';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use('/api/users', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Hello Bangladesh.');
});

export default app;
