import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box, Flex } from 'rebass';

import Header from './Header';
import Footer from './Footer';
import Sidebar from '../sidebar';
import { overflow, position } from 'styled-system';

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
        <Sidebar
          onCloseSidebar={this.closeSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <Flex
          flexDirection="column"
          css={{
            height: '100%',
          }}
        >
          <Header
            onOpenSidebar={this.openSidebar}
            onCloseSidebar={this.closeSidebar}
          />
          <Box
            pt="40px"
            css={{
              flexGrow: 1,
              overflowY: 'auto'
            }}
          >
            {children}
          </Box>
          <Footer />
        </Flex>
      </Box>
    );
  }
}

