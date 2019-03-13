import React from 'react';
import { Flex } from 'rebass';
import HeaderDesktop from './HeaderDesktop';
import Footer from './Footer';
import DesktopScreen from '../devices/Desktop';

const Desktop = ({ children }) => (
  <DesktopScreen>
    <Flex
      flexDirection="column"
      alignItems="center"
      css={{
        borderTop: '5px solid #000'
      }}
    >
      <HeaderDesktop />
      {children}
      <Footer />
    </Flex>
  </DesktopScreen>
);

export default Desktop;
