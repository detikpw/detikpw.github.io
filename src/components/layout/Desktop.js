import React from 'react';
import { Flex } from 'rebass';
import HeaderDesktop from './HeaderDesktop';
import Footer from './Footer';

const Desktop = ({ children }) => (
  <Flex flexDirection="column" alignItems="center">
    <HeaderDesktop />
    {children}
    <Footer />
  </Flex>
);

export default Desktop;
