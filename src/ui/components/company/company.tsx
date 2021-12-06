import React from 'react';
import { Tag } from '../tag/tag';
import * as S from './company.styles';

export interface CompanyProps {
  city?: string;
  imageUrl?: string;
  isLoading?: boolean;
  name?: string;
  specialties?: string[];
}

export function Company({
  city,
  imageUrl,
  isLoading,
  name,
  specialties,
}: CompanyProps): React.ReactElement<CompanyProps> {
  const [displaySkeleton, setDisplaySkeleton] = React.useState(isLoading);

  React.useEffect(() => {
    setDisplaySkeleton(isLoading);
  }, [displaySkeleton, isLoading]);

  return (
    <S.Company className={displaySkeleton ? 'is-loading' : ''}>
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
        {
          // #NotesToReviewer
          // This key={index} is used on purpose here. I WANT the components not to unmount
          // when proper data is rendered.
          specialties?.length
            ? specialties.map((specialty, index) => <Tag key={index} label={specialty} />)
            : <Tag label="" key={0} />
        }
      </S.Specialties>
    </S.Company>
  );
}
