import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Box } from 'rebass';
import MobileLayout from './Mobile';
import DesktopLayout from './Desktop';
import SiteMeta from '../seo/SiteMeta';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }
  blockquote {
    font-family: "volkhov",serif;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    padding-left: 20px;
    border-left: 8px solid #000;
  }
  a {
    color: black;
  }
`
const Layout = ({ children, location, pageData }) => (
  <Box
    css={{
      fontFamily:'HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif',
    }}
  >
    <SiteMeta location={location} pageData={pageData}>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Volkhov" rel="stylesheet"></link>
    </SiteMeta>
    <GlobalStyle />
    <MobileLayout>
      {children}
    </MobileLayout>
    <DesktopLayout>
      {children}
    </DesktopLayout>
  </Box>
);

export default Layout;

