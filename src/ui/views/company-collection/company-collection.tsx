import React from 'react';
import { makeArray } from '../../../utils/make-array';
import { Company } from '../../components/company/company';
import { ListParamsContext } from '../../contexts/list-params-context';
import { useConcurrentCalls } from '../../hooks/use-concurrent-calls';
import { useConfig } from '../../hooks/use-config';
import * as S from './company-collection.styles';

export function CompanyCollection(): React.ReactElement {
  // #NotesToReviewer
  // We should use CompanyViewModel here, instead of any.
  const [data, setData] = React.useState<any[]>(makeArray(10));

  // #NotesToReviewer
  // This is probably not the smartest solution ever, since there is no safety belt
  // in case when the number of calls was counted improperly. But the general idea
  // of keeping track of async calls works fine in this case.
  const { isLoading, registerCall, releaseCall } = useConcurrentCalls();

  const { apiHost } = useConfig();

  const { params } = React.useContext(ListParamsContext);

  React.useEffect(() => {
    registerCall();

    // #NotesToReviewer
    // This could be handled by request mapper.
    const preparedParams = {
      namePattern: params.namePattern || "",
      specialties: params.specialties?.join(',') || ""
    };

    // #NotesToReviewer
    // Limit is hardcoded here as we don't handle pagination yet.
    fetch(`${apiHost}/api/company?${new URLSearchParams(preparedParams).toString()}&limit=300`)
      .then((response) => response.json())
      .then((json) => {
        // #NotesToReviewer
        // Mapping is missing here. We could do: setData(CompanyMap.toViewModel(json)).
        setData(json);
      })
      .catch((e) => {
        setData([]);
        console.error(e);
      })
      .finally(() => {
        releaseCall();
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiHost, params.namePattern, params.specialties]);

  return (
    // #NotesToReviewer
    // This is-loading does nothing at this point. It is used for testing purposes, and
    // should be refactored along with managing visual state of company list being in
    // loading state.
    <S.CompanyCollection
      className={isLoading ? 'is-loading' : ''}
      data-testid="company-collection"
    >
      {(data && data.length)
        ? data.map((item, index) => (
            <Company
              city={item.city}
              imageUrl={item.logoUrl}
              isLoading={isLoading}
              name={item.name}
              // #NotesToReviewer
              // This key={index} is used on purpose here. I WANT the components not to unmount
              // when proper data is rendered.
              key={index}
              specialties={
                item.specialties
                  ? item.specialties.map((specialty: any) => specialty.label)
                  : []
              }
            />
          ))
        : null
      }
      {(!isLoading && data?.length < 1)
        ? <S.NotFound>No companies found</S.NotFound>
        : null
      }
    </S.CompanyCollection>
  )
}
