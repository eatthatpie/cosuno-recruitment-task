import { Specialty } from "../../entities/specialty";
import { SpecialtyViewModel } from "../models/specialty-view-model";

export class SpecialtyMap {
    static toViewModel(specialty: Specialty): SpecialtyViewModel {
        return {
            id: specialty.id,
            label: specialty.label
        };
    }
}
