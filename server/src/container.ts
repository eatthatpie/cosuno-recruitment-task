import { Db } from './infra/db/db';
import {
  createGetCompanyCollectionUseCase,
  GetCompanyCollection
} from './use-cases/get-company-collection';

const companyDataSource = new Db();

export const getCompanyCollection: GetCompanyCollection
  = createGetCompanyCollectionUseCase(companyDataSource);
