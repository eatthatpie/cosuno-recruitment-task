import { GetCompanyCollectionRequest } from '../../use-cases/get-company-collection';
import { ICompanyDataSource } from '../../use-cases/interfaces/company-data-source';
import { CompanyPersistenceModel } from './models/company-persistence-model';
import { SpecialtyPersistenceModel } from './models/specialty-persistence-model';
import { Company } from '../../entities/company';
import companiesJson from './../../infra/db/storage/companies.json';
import specialtiesJson from './../../infra/db/storage/specialties.json';

export class Db implements ICompanyDataSource {
  private _joinWithSpecialtyCollection(companyCollection: CompanyPersistenceModel[]): Company[] {
    let specialtiesByKey: Record<string, SpecialtyPersistenceModel> = {};

    specialtiesJson.forEach((spec: SpecialtyPersistenceModel) => {
      specialtiesByKey[spec.id] = spec;
    });
      
    return companyCollection.map((item) => {
      return {
        ...item,
        specialtyCollection: item.specialties.map((specialtyId) => specialtiesByKey[specialtyId])
      };
    });
  }

  private _paginate(records: CompanyPersistenceModel[], page = 1, limit = 10): CompanyPersistenceModel[] {
    page = page > 0 ? page : 1;
    limit = limit > 0 ? limit : 10;

    return records.slice((page - 1) * limit, page * limit);
  }

  // @TODO Explicit mapping...
  async find(request: GetCompanyCollectionRequest) {
    let records: CompanyPersistenceModel[] = companiesJson;

    if (request.namePattern) {
      records = records.filter((record) => {
        return new RegExp(request.namePattern!, "i").test(record.name);
      });
    }

    if (request.specialties && request.specialties.length) {
      records = records.filter((record) => {
        return !request.specialties?.find((spec) => {
          return !record.specialties.includes(spec);
        });
      });
    }

    const result = this._paginate(records, request.page, request.limit);

    const out = this._joinWithSpecialtyCollection(result);

    return Promise.resolve(out);
  }
}
