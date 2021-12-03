import React from 'react';

export interface IListParamsContext {
  applyNamePattern: (pattern: string) => void;
  applySpecialties: (specialties: string[]) => void;
  readonly params: {
    namePattern?: string;
    specialties?: string[];
  }
}

export const ListParamsContext = React.createContext<IListParamsContext>({
  applyNamePattern: (_: string) => {},
  applySpecialties: (_: string[]) => {},
  params: {}
});

export type ListParamsProviderProps = React.PropsWithChildren<{}>;

export function ListParamsProvider({
  children
}: ListParamsProviderProps): React.ReactElement<ListParamsProviderProps> {
  const [params, setParams] = React.useState({});

  const applyNamePattern = React.useCallback((pattern: string) => {
    setParams((state) => ({
      ...state,
      namePattern: pattern.length ? pattern : undefined
    }));
  }, []);

  const applySpecialties = React.useCallback((specialties: string[]) => {
    setParams((state) => ({
      ...state,
      specialties: specialties.length ? specialties : undefined
    }));
  }, []);

  return (
    <ListParamsContext.Provider value={{
      applyNamePattern,
      applySpecialties,
      params
    }}>
      {children}
    </ListParamsContext.Provider>
  );
}
