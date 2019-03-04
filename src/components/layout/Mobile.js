import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import Header from './HeaderMobile';
import Footer from './Footer';
import Sidebar from '../sidebar';
import MobileScreen from '../devices/Mobile';

export default class Mobile extends Component {
  state = {
    isSidebarOpen: false
  }

  openSidebar = () => this.setState({ isSidebarOpen: true })
  closeSidebar = () => this.setState({ isSidebarOpen: false })

  render() {
    const { children } = this.props
    const { isSidebarOpen } = this.state;
    return (
      <MobileScreen>
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
      </MobileScreen>
    );
  }
}
