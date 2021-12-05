import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/ui/styles/theme';

export const TestWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
