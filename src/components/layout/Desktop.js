import React from 'react';
import { Flex } from 'rebass';
import HeaderDesktop from './HeaderDesktop';
import Footer from './Footer';

const Desktop = ({ children }) => (
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
);

export default Desktop;
