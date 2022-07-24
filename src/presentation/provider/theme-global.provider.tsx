import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeGlobalApp } from '@theme-global/theme.global';
import { GlobalContainerStyle } from '@theme-global/global-app.style';

type Props = {
    children: React.ReactElement [] | React.ReactElement;
}

export const ThemeGlobalProvider = ({ children }:Props) => (
  <ThemeProvider theme={ThemeGlobalApp}>
    <GlobalContainerStyle>
      {children}
    </GlobalContainerStyle>
  </ThemeProvider>
);
