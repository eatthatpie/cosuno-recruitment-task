import React from 'react';
import { Company } from '../../components/company/company';
import { ListParamsContext } from '../../contexts/list-params-context';
import { useConfig } from '../../hooks/use-config';
import * as S from './company-collection.styles';

export function CompanyCollection(): React.ReactElement {
  const [data, setData] = React.useState<any[]>([]);

  const { apiHost } = useConfig();

  const { params } = React.useContext(ListParamsContext);

  React.useEffect(() => {
    const preparedParams = {
      namePattern: params.namePattern || "",
      specialties: params.specialties?.join(',') || ""
    };

    fetch(`${apiHost}/api/company?${new URLSearchParams(preparedParams).toString()}&limit=9999`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [apiHost, params.namePattern, params.specialties]);

  return (
    <S.CompanyCollection>
      {data.map((item) => (
        <Company
          city={item.city}
          imageUrl={item.logoUrl}
          name={item.name}
          key={item.id}
          specialties={item.specialties.map((specialty: any) => specialty.label)}
        />
      ))}
    </S.CompanyCollection>
  )
}
