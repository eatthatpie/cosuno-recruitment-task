import { Uuid } from '../common/types';
import { Company } from '../entities/company';
import { ICompanyDataSource } from './interfaces/company-data-source';

export interface GetCompanyCollectionRequest {
    limit?: number;
    namePattern?: string;
    page?: number;
    specialties?: Uuid[];
}

export type GetCompanyCollection = (request: GetCompanyCollectionRequest) => Promise<Company[]>;

// #NoteToReviewer
// Domain errors handling is not implemented here.
export function createGetCompanyCollectionUseCase(dataSource: ICompanyDataSource): GetCompanyCollection {
    return async (request: GetCompanyCollectionRequest) => {
        const collection = await dataSource.find(request);

        return Promise.resolve(collection);
    };
}
