import express from 'express';
import { StatusCodes } from '../../http/status-codes';
import specialtiesJson from './../../infra/db/storage/specialties.json';

// #NoteToReviewer
// This should be handled like company controller is.
export const handleGet = async (_req: express.Request, res: express.Response) => {
  res
    .status(StatusCodes.OK)
    .json(specialtiesJson);
}
