import { Company } from '../../entities/company';
import { CompanyViewModel } from '../models/company-view-model';
import { SpecialtyMap } from './specialty-map';

export class CompanyMap {
    static toViewModel(company: Company): CompanyViewModel {
        return {
            city: company.cityName,
            id: company.id,
            logoUrl: company.logoUrl,
            name: company.name,
            specialties: company.specialtyCollection.map(SpecialtyMap.toViewModel)
        };
    }
}
