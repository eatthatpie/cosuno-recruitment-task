import { Uuid } from '../common/types';
import { Specialty } from './specialty';

export interface Company {
    id: Uuid;
    cityName: string;
    name: string;
    logoUrl: string;
    specialtyCollection: Specialty[];
}
