import faker from 'faker';
import fs from 'fs';
import path from 'path';
import {
  CompanyPersistenceModel
} from '../server/src/infra/db/models/company-persistence-model';
import specialtiesJson from './../server/src/infra/db/storage/specialties.json';

export default function randomInt(start: number, end: number): number {
  return Math.round(Math.random() * (end - start)) + start;
}

function randomSubsetOf<T>(arr: Array<T>, count: number): T[] {
  const clone = JSON.parse(JSON.stringify(arr));
  const out: T[] = [];

  for (let i = 0; i < count; i++) {
    const index = randomInt(0, clone.length - 1 - i);

    const item = clone.splice(index, 1);

    out.push(item[0]);
  }

  return out;
}

const generateCompanies = (count: number): CompanyPersistenceModel[] => {
  const out: CompanyPersistenceModel[] = [];

  const specialties = specialtiesJson;

  for (let i = 0; i < count; i++) {
    out.push({
      id: faker.datatype.uuid(),
      cityName: faker.address.cityName(),
      name: faker.company.companyName(),
      // @INFO
      // This "trick" handles different logos generation
      logoUrl: `https://placekitten.com/${randomInt(28, 36)}/${randomInt(28, 36)}`,
      specialties: randomSubsetOf(specialties, randomInt(1, 3)).map((spec) => spec.id)
    });
  }

  return out;
}

const persist = (companies: CompanyPersistenceModel[]) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, './../server/src/infra/db/storage/companies.json'),
      JSON.stringify(companies)
    );
  } catch (e) {
    console.error(e);
  }
}

const count = parseInt(process.argv[2] || '10');

if (count > 300) {
  console.error('Error: Please generate no more than 300 companies');
} else {
  persist(generateCompanies(count));
}
