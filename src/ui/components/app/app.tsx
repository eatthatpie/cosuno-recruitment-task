import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ListParamsProvider } from '../../contexts/list-params-context';
import { GlobalStyle } from '../../styles/global-style';
import { theme } from '../../styles/theme';
import { CompanyCollection } from '../../views/company-collection/company-collection';
import { Nav } from '../../views/nav/nav';
import * as S from './app.styles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.App>
        <ListParamsProvider>
          <Nav />
          <CompanyCollection />
        </ListParamsProvider>
      </S.App>
    </ThemeProvider>
  );
}
