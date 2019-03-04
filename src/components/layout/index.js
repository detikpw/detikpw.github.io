import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box, Flex } from 'rebass';
import { overflow, position } from 'styled-system';
import MobileLayout from './Mobile';
import HeaderDesktop from './HeaderDesktop';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
  }
`

const Layout = ({ children }) => (
  <Box
    css={{
      fontFamily:'HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif',
    }}
  >
    <Helmet>
      {/* TODO Separate mobile and desktop */}
      <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Volkhov" rel="stylesheet"></link>
    </Helmet>
    <GlobalStyle />
    <MobileLayout>
      {children}
    </MobileLayout>
    <HeaderDesktop />
    {children}
  </Box>
);

export default Layout;

