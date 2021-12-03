import { SpecialtyViewModel } from './specialty-view-model';

export interface CompanyViewModel {
    city: string;
    id: string;
    logoUrl: string;
    name: string;
    specialties: SpecialtyViewModel[];
}
