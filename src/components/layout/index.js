import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box } from 'rebass';
import { path } from 'ramda';
import { StaticQuery, graphql } from 'gatsby';
import MobileLayout from './Mobile';
import DesktopLayout from './Desktop';

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
const layout = ({ children }) => data => {
  const { title, description } = path(['site', 'siteMetadata'])(data);
  return (
    <Box
      css={{
        fontFamily:'HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif',
      }}
    >
      <Helmet titleTemplate={`%s | ${title}`}>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <title>Home</title>
        <meta name="description" content={description} />
        {/* TODO Separate mobile and desktop */}
        <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Volkhov" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle />
      <MobileLayout>
        {children}
      </MobileLayout>
      <DesktopLayout>
        {children}
      </DesktopLayout>
    </Box>
  );
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query{
        site {
          siteMetadata {
            title
            description
          }
        }
      }`
    }
    render={layout({ children })}
  />
);

export default Layout;

