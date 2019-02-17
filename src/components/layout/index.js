import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components'
import { Box } from 'rebass';

import Header from './Header';
import Sidebar from '../sidebar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
          fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"
        }}
      >
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle />
        <Header
          onOpenSidebar={this.openSidebar}
          onCloseSidebar={this.closeSidebar}
        />
        <Sidebar
          onCloseSidebar={this.closeSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        {children}
      </Box>
    );
  }
}

