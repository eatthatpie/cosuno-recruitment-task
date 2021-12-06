import express from 'express';
import { getCompanyCollection } from '../../container';
import { StatusCodes } from '../../http/status-codes';
import { CompanyMap } from './../mappers/company-map';

// #NotesToReviewer
// In real app we should handle errors here. At this point, the endpoint can return
// unexpected errors only (500), i.e. there are no domain errors.
export const handleGet = async (req: express.Request, res: express.Response) => {
  const result = await getCompanyCollection({
    limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
    namePattern: req.query.namePattern ? req.query.namePattern as string : undefined,
    page: req.query.page ? parseInt(req.query.page as string) : undefined,
    specialties: req.query.specialties ? (req.query.specialties as string).split(',') : undefined
  });

  const response = result.map(CompanyMap.toViewModel);

  res
    .status(StatusCodes.OK)
    .json(response);
}
