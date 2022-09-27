import React from 'react';
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) =>
  (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: Providers, ...options})

export default customRender;
