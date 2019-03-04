import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box, Flex } from 'rebass';
import { overflow, position } from 'styled-system';
import MobileLayout from './Mobile';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
  }
`

export default class extends Component {
  state = {
    isSidebarOpen: false
  }

  openSidebar = () => this.setState({ isSidebarOpen: true })
  closeSidebar = () => this.setState({ isSidebarOpen: false })
  render() {
    const { children } = this.props;
    const { isSidebarOpen } = this.state;
    return (
      <Box
        css={{
          fontFamily:'HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif',
        }}
      >
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle />
        <MobileLayout>
          {children}
        </MobileLayout>
      </Box>
    );
  }
}

