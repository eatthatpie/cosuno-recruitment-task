import React from 'react';
import { Checklist } from '../../components/checklist/checklist';
import { ListParamsContext } from '../../contexts/list-params-context';
import debounce from 'lodash/debounce';
import * as S from './nav.styles';
import { useConfig } from '../../hooks/use-config';

export function Nav(): React.ReactElement {
  const { apiHost, debounceTimeout } = useConfig();

  const [data, setData] = React.useState<any[]>([]);

  const {
    applyNamePattern,
    applySpecialties
  } = React.useContext(ListParamsContext);

  const handleTextFieldChange = React.useMemo(
    () => debounce((e) => {
      applyNamePattern(e.target.value);
    }, debounceTimeout),
    [applyNamePattern, debounceTimeout]
  );

  const handleChecklistChange = React.useMemo(
    () => debounce(applySpecialties, debounceTimeout),
    [applySpecialties, debounceTimeout]
  );

  React.useEffect(() => {
    fetch(`${apiHost}/api/specialty`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [apiHost]);

  return (
    <S.Nav>
      {/* #NotesToReviewer This component should be controlled, and params.specialties should define its state. */}
      <S.TextField
        onChange={handleTextFieldChange}
        placeholder="Search by name"
      />
      {/* #NotesToReviewer This component should be controlled, and params.specialties should define its state. */}
      <Checklist
        items={data}
        onChange={handleChecklistChange}
      />
    </S.Nav>
  )
}
