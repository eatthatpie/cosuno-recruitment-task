import React from 'react';
import { Tag } from '../tag/tag';
import * as S from './company.styles';

export interface CompanyProps {
  city?: string;
  imageUrl?: string;
  name?: string;
  specialties?: string[];
}

export function Company({
  city,
  imageUrl,
  name,
  specialties,
}: CompanyProps): React.ReactElement<CompanyProps> {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(process.env)
    setTimeout(() => {
      setIsLoading(false)
    }, 1);
  }, []);

  return (
    <S.Company className={isLoading ? 'is-loading' : ''}>
      <S.InfoContainer>
        <S.LogoContainer>
          <img
            alt="logo"
            height="32"
            src={imageUrl}
            width="32"
          />
        </S.LogoContainer>
        <S.NameAndCityContainer>
          <S.Name>
            {name}
          </S.Name>
          <S.City>
            {city}
          </S.City>
        </S.NameAndCityContainer>
      </S.InfoContainer>
      <S.Specialties>
        {specialties?.map((specialty) => <Tag label={specialty} />)}
      </S.Specialties>
    </S.Company>
  );
}
