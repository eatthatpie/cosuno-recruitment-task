import express from 'express';
import { StatusCodes } from '../../http/status-codes';
import specialtiesJson from './../../infra/db/storage/specialties.json';

export const handleGet = async (_req: express.Request, res: express.Response) => {
  res
    .status(StatusCodes.OK)
    .json(specialtiesJson);
}
