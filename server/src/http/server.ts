import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import companyRoutes from './routes/company';
import specialtyRoutes from './routes/specialty';
import { config } from '../config/config';
import { StatusCodes } from './status-codes';
import { NotFoundErrorResponse } from './error-responses';

export function createServer() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.server.allowedOrigin }));
  app.use(express.json());

  app.use('/api', companyRoutes);
  app.use('/api', specialtyRoutes);

  app.use((_, res: express.Response) => {
    res.status(StatusCodes.NOT_FOUND).json(new NotFoundErrorResponse());
  });

  return app;
}
