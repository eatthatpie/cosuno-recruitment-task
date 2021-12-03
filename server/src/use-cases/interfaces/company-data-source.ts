import { Company } from '../../entities/company';
import { GetCompanyCollectionRequest } from '../get-company-collection';

export interface ICompanyDataSource {
    find(request: GetCompanyCollectionRequest): Promise<Company[]>;
}
