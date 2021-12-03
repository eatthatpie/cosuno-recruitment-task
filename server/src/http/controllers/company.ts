import express from 'express';
import { getCompanyCollection } from '../../container';
import { StatusCodes } from '../../http/status-codes';
import { CompanyMap } from './../mappers/company-map';

export const handleGet = async (req: express.Request, res: express.Response) => {
  const result = await getCompanyCollection({
    limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
    namePattern: req.query.namePattern ? req.query.namePattern as string : undefined,
    page: req.query.page ? parseInt(req.query.page as string) : 1,
    specialties: req.query.specialties ? (req.query.specialties as string).split(',') : []
  });

  const response = result.map(CompanyMap.toViewModel);

  res
    .status(StatusCodes.OK)
    .json(response);
}
