import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box } from 'rebass';
import MobileLayout from './Mobile';
import DesktopLayout from './Desktop';
import MobileScreen from '../devices/Mobile';

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
    <MobileScreen>
      { isMobile => (
        isMobile ? (
          <MobileLayout>
            {children}
          </MobileLayout>
        ) : (
          <DesktopLayout>
            {children}
          </DesktopLayout>
        )
      )}
    </MobileScreen>
  </Box>
);

export default Layout;

